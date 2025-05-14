import https from "@/api/https";
import { ref, reactive } from "vue";

export const planoALimentar = () => {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  const token = ref(getCookie("token"));

  const listarPlanos = reactive([]);
  const listarRefeicoes = reactive({
    refeicoes: [],
  });

  async function planos() {
    await https
      .get("/plano-alimentar", {
        headers: {
          "x-api-minha-ia-fit-token": token.value,
        },
      })
      .then((res) => {
        console.log(res);
        const dados = res.data;
        listarPlanos.splice(0, listarPlanos.length, ...dados);
        //listarPlanos.value = dados;
        console.log(listarPlanos);
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }

  async function refeicoes(Token) {
    await https
      .get(`/plano-alimentar/${Token}`, {
        headers: {
          "x-api-minha-ia-fit-token": token.value,
        },
      })
      .then((res) => {
        const dados = res.data;
        listarRefeicoes.refeicoes = dados.Refeicoes;
        console.log(listarRefeicoes.refeicoes);
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }

  return {
    listarRefeicoes,
    listarPlanos,
    refeicoes,
    planos,
  };
};
