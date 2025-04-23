<template>
  <div class="rounded-lg mt-14">
    <nav
      class="flex px-3 py-3 mb-4 text-white border border-gray-200 rounded-lg bg-gray-900 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Breadcrumb"
    >
      <ol
        class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
      >
        <li>
          <div class="flex items-center">
            <a
              href="#"
              class="ms-1 text-sm font-medium text-white hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >
              Home</a
            >
          </div>
        </li>

        <li>
          <div class="flex items-center">
            <svg
              class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a
              href="/usuario/perfil"
              class="ms-1 text-sm font-medium text-white hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >
              Perfil</a
            >
          </div>
        </li>

        <li aria-current="page">
          <div class="flex items-center">
            <svg
              class="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span
              class="ms-1 text-sm font-bold text-blue-400 md:ms-2 dark:text-gray-400"
              >Informações Pessoais</span
            >
          </div>
        </li>
      </ol>
    </nav>

    <section
      class="bg-gray-900 dark:bg-gray-900"
      v-if="pessoa.encontrado === true"
    >
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white"
        >
          Notamos que você adicionou suas informações
        </h1>
        <p
          class="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"
        >
          Tudo certo! Suas informações foram registradas. Se quiser dar uma
          olhada, é só ir até o seu perfil.
        </p>
        <div
          class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"
        >
          <a
            href="/usuario/perfil"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Voltar ao perfil
          </a>
        </div>
      </div>
    </section>

    <!-- Container para centralizar -->
    <div
      class="flex bg-gray-100 dark:bg-gray-900"
      v-if="pessoa.encontrado === false"
    >
      <div
        class="w-full max-w-auto p-6 bg-white rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Adicionar Informações Pessoais
        </h2>

        <form @submit.prevent="add">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Nome</label
              >
              <input
                type="text"
                id="first_name"
                v-model="pessoaRegistro.nome"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Sobrenome</label
              >
              <input
                type="text"
                id="last_name"
                v-model="pessoaRegistro.sobrenome"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <label
                for="Idade"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Idade</label
              >
              <input
                type="number"
                id="Idade"
                v-model="pessoaRegistro.idade"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <label
                for="Sexo"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Sexo</label
              >

              <select
                id="Sexo"
                v-model="pessoaRegistro.sexo"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Selecione o seu sexo</option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </select>
            </div>

            <div>
              <label
                for="Altura"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Sua altura</label
              >
              <input
                type="text"
                id="Altura"
                v-model="pessoaRegistro.altura"
                @input="formatarAltura"
                maxlength="4"
                placeholder="1.75"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <label
                for="Peso"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Seu peso</label
              >
              <input
                type="text"
                id="Peso"
                v-model="pessoaRegistro.peso"
                @input="formatarPeso"
                maxlength="3"
                placeholder="exemplos (80 ou 180)"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import https from "@/api/https.js";
import { userAuth } from "@/stores/auth";
import Swal from "sweetalert2";
import { UsuarioDados } from "@/utils/usuarioDados";
import { onMounted, reactive } from "vue";

const { pessoa, pessoaDados } = UsuarioDados();
const auth = userAuth();

const pessoaRegistro = reactive({
  nome: "",
  sobrenome: "",
  idade: "",
  sexo: "",
  altura: "",
  peso: "",
});

function formatarAltura() {
  let numeros = pessoaRegistro.altura.replace(/\D/g, "");
  if (numeros.length > 3) numeros = numeros.slice(0, 3);

  if (numeros.length >= 2) {
    pessoaRegistro.altura = numeros[0] + "." + numeros.slice(1);
  } else {
    pessoaRegistro.altura = numeros;
  }
}

function formatarPeso() {
  let numeros = pessoaRegistro.peso.replace(/\D/g, ""); // Remove tudo que não for número

  // Limita a no máximo 3 dígitos
  numeros = numeros.slice(0, 3);

  pessoaRegistro.peso = numeros;
}

function verificarCampos() {
  if (
    pessoaRegistro.nome === "" &&
    pessoaRegistro.sobrenome === "" &&
    pessoaRegistro.idade.length === 0 &&
    pessoaRegistro.sexo === "" &&
    pessoaRegistro.altura === "" &&
    pessoaRegistro.peso === ""
  ) {
    Swal.fire("Atenção", "Preencha todos os campos", "warning");
    return false;
  }

  return true;
}

async function add() {
  if (!verificarCampos()) return;

  Swal.fire({
    title: "Processando...",
    text: "Aguarde um momento",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  await https
    .post("/pessoa/cadastro", pessoaRegistro, {
      headers: {
        "x-monte-ia-fit-token": auth.token,
      },
    })
    .then((res) => {
      Swal.close();
      console.log(res);
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
      console.log(err);
      const res = err.response;
      Swal.fire("Erro", `${res.data.message}`, "error");
    });
}

onMounted(async () => {
  await pessoaDados();
});
</script>
