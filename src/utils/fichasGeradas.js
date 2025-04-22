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

      async function fichas() {
        await https
        .get("/ia/ficha-treino", {
            headers: {
             "x-monte-ia-fit-token": token.value,
            },
        })
        .then((res)=>{
            console.log(res);
            const dados = res.data
            lista.splice(0, lista.length, ...dados);
            return true;
        }).catch((err)=>{
          console.log(err);
          return false;            
        })
      }


      async function ficha(id){
        await https
        .get(`/ia/ficha-treino/${id}`, {
            headers: {
             "x-monte-ia-fit-token": token.value,
            },
        })
        .then((res)=>{
            console.log(res);
            const dados = res.data;
            fichaDados.resultado = dados.Resultado;
            return true;
        }).catch((err)=>{
          console.log(err);
          return false;   
        })
      }


      return {
        lista,
        fichas,
        ficha,
        fichaDados,
      }
}