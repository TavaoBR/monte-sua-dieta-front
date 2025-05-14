import https from "@/api/https";
import {ref, reactive } from 'vue';

export const fichasGeradasDados = () => {
      function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
        return null;
      }
    
      const token = ref(getCookie("token"));


      const lista = reactive([])

      const fichaDados = reactive({
        resultado: ''
      })

      const listarDadosFicha = reactive([])

      async function fichas() {
        await https
        .get("/fichas", {
            headers: {
             "x-api-minha-ia-fit-token": token.value,
            },
        })
        .then((res)=>{
            console.log(res);
            const dados = res.data.result
            lista.splice(0, lista.length, ...dados);
            return true;
        }).catch((err)=>{
          console.log(err);
          return false;            
        })
      }


      async function fichaExercicios(id){
        await https
        .get(`/fichas/exercicios/${id}`, {
            headers: {
             "x-api-minha-ia-fit-token": token.value,
            },
        })
        .then((res)=>{
            console.log(res);
            const dados = res.data.result;
            listarDadosFicha.splice(0, listarDadosFicha.length, ...dados);
            return true;
        }).catch((err)=>{
          console.log(err);
          return false;   
        })
      }


      return {
        lista,
        listarDadosFicha,
        fichas,
        fichaExercicios,
        fichaDados,
      }
}