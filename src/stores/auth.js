import { defineStore } from "pinia";
import { computed, ref } from "vue";
import https from "@/api/https.js";

export const userAuth = defineStore('auth', () => {

    function getCookie(name){
       const value = `; ${document.cookie}`;
       const parts = value.split(`; ${name}`);
       if(parts.length === 2) return parts.pop().split(';').shift();
    }

    function setCookie(name, value, hours){
      const expires = new Date();
      expires.setTime(expires.getTime() + hours * 60 * 60 * 1000);
      document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax;Secure`;
    }

    function removeCookie(name){
      document.cookie = `${name}=; Max-Age=0; path=/`;
    }

    const token = ref(getCookie("token"));

    function setToken(tokenValue){
      setCookie('token', tokenValue, 3); // expira em 3 horas
      token.value = tokenValue;
    }

    const isAuthenticated = computed(() => {
      return token.value;
    });

    async function checkTokenAuth() {
        await https.get('/auth/verifica', {
         headers: {
            'x-monte-ia-fit-token': token.value
         }
        })
        .then((res)=>{
            console.log(res);
            return res.data;
        }).catch((err)=>{
            console.log(err);
        });
    }


    function logout() {
       removeCookie('token');
       token.value = '';
    }

    return {
      token,
      setToken,
      checkTokenAuth,
      isAuthenticated,
      logout
    };
});