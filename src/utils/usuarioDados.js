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
    nomeUsuario: '',
    email: '',
    avatar: ''
  });

  const pessoa = reactive({
    nome: '',
    sobrenome: '',
    idade: '',
    sexo: '',
    altura: '',
    peso: ''

  })


  async function usuarioDados() {
    await https
      .get("/usuario", {
        headers: {
          "x-monte-ia-fit-token": token.value,
        },
      })
      .then((res) => {
        const dados = res.data;
        usuario.nomeUsuario = dados.NomeUsuario
        usuario.email = dados.Email
        usuario.avatar = dados.Avatar
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }

  async function pessoaDados() {
    await https
    .get()
    .then((res)=>{
        const dados = res.data
        pessoa.nome = dados.Nome
        pessoa.sobrenome = dados.sobrenome
        pessoa.idade = dados.idade
        pessoa.sexo = dados.sexo
        pessoa.altura = dados.Altura
        pessoa.peso = dados.Peso
        return true;
    }).catch((err)=>{
       const response = err.response
       if(response.status === 404){
        return SEMCADASTRADO 
       }
       
       return false;
    })
  }

  return {
    usuario,
    usuarioDados,
    pessoa,
    pessoaDados
  };
};
