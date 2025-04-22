import https from "@/api/https";
import {ref, reactive } from vue;

export const fichasGeradasDados = () => {
      function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
        return null;
      }
    
      const token = ref(getCookie("token"));


      const lista = reactive([])

      async function fichas() {

      }


      return {
        lista,
        fichas
      }
}