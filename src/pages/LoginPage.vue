<template>
  <div class="flex items-center justify-center py-10 dark:bg-gray-900">
    <div
      class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <form class="space-y-6" @submit.prevent="logar">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
          Faça login na nossa plataforma
        </h5>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Seu E-mail</label
          >
          <input
            type="email"
            v-model="login.email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Sua senha</label
          >
          <input
            type="password"
            v-model="login.senha"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          />
        </div>
        <button
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Logar com sua conta
        </button>
        <div class="flex items-start">
          <div class="flex items-start">
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Não possui registro?
              <a
                href="/registro"
                class="text-blue-700 hover:underline dark:text-blue-500"
                >Criar Conta</a
              >
            </div>
          </div>
          <a
            href="#"
            class="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >Esqueceu a senha?</a
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import https from "@/api/https.js";
import { userAuth } from "@/stores/auth";
import { reactive } from "vue";
import Swal from "sweetalert2";

const auth = userAuth();

const login = reactive({
  email: "",
  senha: "",
});

function verificarCampos() {
  if (login.email === "" && login.senha === "") {
    Swal.fire("Atenção", "Preencha todos os campos", "warning");
    return false;
  }

  if (login.email === "") {
    Swal.fire("Atenção", "Digite seu e-mail por favor", "warning");
    return false;
  }

  if (login.senha === "") {
    Swal.fire("Atenção", "Digite sua senha por favor", "warning");
    return false;
  }

  return true;
}

async function logar() {
  if(!verificarCampos()) return;

  Swal.fire({
    title: "Processando...",
    text: "Aguarde um momento",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  await https
    .post("/auth/login", login)
    .then((res) => {
      Swal.close();

      auth.setToken(res.data.token);

      Swal.fire({
        title: "Sucesso",
        text: res.data.message,
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        window.location.href = "/usuario/perfil";
      });
    })
    .catch((err) => {
      Swal.close();
      const response = err.response;

      if (response.status === 404) {
        Swal.fire("Erro", "E-mail ou senha invalidos", "error");
      }

      if (response.status === 403) {
        Swal.fire("Erro", `${response.data.message}`, "error");
      }
    });
}
</script>
