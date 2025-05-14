import https from "@/api/https";
import { computed, ref, reactive } from "vue";

export const UsuarioDados = () => {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  const token = ref(getCookie("token"));

  const usuario = reactive({
    nomeUsuario: "",
    email: "",
    avatar: "",
    credito: "",
  });

  const pessoa = reactive({
    nome: "",
    sobrenome: "",
    idade: "",
    sexo: "",
    altura: "",
    peso: "",
    encontrado: "",
  });

  const perfilNutricionalDados = reactive({
    nivel_atividade: "",
    objetivo: "",
    dieta: "",
    restricao: "",
    preferencia: "",
    condicoesMedica: "",
    alergias: "",
    encontrado: "",
  });

  async function usuarioDados() {
    await https
      .get("/usuario", {
        headers: {
          "x-api-minha-ia-fit-token": token.value,
        },
      })
      .then((res) => {
        const dados = res.data;
        usuario.nomeUsuario = dados.NomeUsuario;
        usuario.email = dados.Email;
        usuario.avatar = dados.Avatar;
        usuario.credito = dados.Credito;
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }

  async function pessoaDados() {
    await https
      .get("/pessoa", {
        headers: {
          "x-api-minha-ia-fit-token": token.value,
        },
      })
      .then((res) => {
        const dados = res.data;
        pessoa.nome = dados.Nome;
        pessoa.sobrenome = dados.Sobrenome;
        pessoa.idade = dados.Idade;
        pessoa.sexo = dados.Sexo;
        pessoa.altura = dados.Altura;
        pessoa.peso = dados.Peso;
        pessoa.encontrado = true;
        return true;
      })
      .catch((err) => {
        const response = err.response;
        if (response.status === 404) {
          pessoa.encontrado = false;
          return pessoa.encontrado;
        }

        return false;
      });
  }

  async function perfilNutricional() {
    await https
      .get("/perfil-nutricional", {
        headers: {
          "x-api-minha-ia-fit-token": token.value,
        },
      })
      .then((res) => {
        console.log(res);
        const dados = res.data.result;
        perfilNutricionalDados.dieta = dados.TipoDieta;
        perfilNutricionalDados.objetivo = dados.Objetivo;
        perfilNutricionalDados.nivel_atividade = dados.NivelAtividade;
        perfilNutricionalDados.preferencia = dados.PreferenciasAlimentares;
        perfilNutricionalDados.restricao = dados.RestricoesAlimentares;
        perfilNutricionalDados.condicoesMedica = dados.CondicoesMedica;
        perfilNutricionalDados.alergias = dados.Alergias;
        perfilNutricionalDados.encontrado = true;
        return true;
      })
      .catch((err) => {
        const response = err.response;
        if (response.status === 404) {
          perfilNutricionalDados.encontrado = false;
          return perfilNutricionalDados.encontrado;
        }
        return false;
      });
  }

  return {
    token,
    usuario,
    usuarioDados,
    pessoa,
    pessoaDados,
    perfilNutricional,
    perfilNutricionalDados,
  };
};
