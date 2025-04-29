import https from "@/api/https";
import { ref, reactive } from "vue";

export const exerciciosDados = () => {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  const token = ref(getCookie("token"));

  const listaMusculos = reactive([]);
  const listaExercicios = reactive([]);
  const nomeMuscular = reactive({
    nome: ""
  })

  async function musculos() {
    await https
      .get("/exercicios/listar/musculos", {
        headers: {
          "x-monte-ia-fit-token": token.value,
        },
      })
      .then((res) => {
        console.log(res);
        const dados = res.data.result;
        listaMusculos.splice(0, listaMusculos.length, ...dados);
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }

  async function exercicios(idGrupo) {
    await https
      .get(`/exercicios/listar/exercicios/${idGrupo}`, {
        headers: {
          "x-monte-ia-fit-token": token.value,
        },
      })
      .then((res) => {
        console.log(res);
        const dados = res.data.result;
        const grupo = res.data.grupo;
        listaExercicios.splice(0, listaExercicios.length, ...dados);
        nomeMuscular.nome = grupo;
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }

  return { listaExercicios, listaMusculos, exercicios, musculos, nomeMuscular };
};
