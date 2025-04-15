<template>
  <div class="rounded-lg mt-14" v-if="!isLoading">
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
              >Perfil Nutricional</span
            >
          </div>
        </li>
      </ol>
    </nav>

    <section
      class="bg-gray-900 dark:bg-gray-900"
      v-if="padraoAlimentar.encontrado === true"
    >
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white"
        >
          Notamos que você adicionou as informações para Perfil Nutricional
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

    <div
      class="flex bg-gray-100 dark:bg-gray-900"
      v-if="padraoAlimentar.encontrado === false"
    >
      <div
        class="w-full max-w-auto p-6 bg-white rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Adicionar Perfil Nutricional
        </h2>

        <form @submit.prevent="add">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="dietaEspc"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Você segue alguma dieta específica?
              </label>
              <select
                v-model="padraoRegistro.dietaEspc"
                id="dietaEspc"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option
                  v-for="opcao in selectDieta"
                  :key="opcao.value"
                  :value="opcao.value"
                >
                  {{ opcao.label }}
                </option>
              </select>
            </div>
            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Você possui alguma restrição alimentar ?
              </label>

              <div class="flex flex-wrap gap-4">
                <div
                  class="flex items-center me-4"
                  v-for="opcao in itensRestricao"
                >
                  <input
                    v-model="padraoRegistro.restricao"
                    :id="opcao.value"
                    type="checkbox"
                    :value="opcao.value"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    :for="opcao.value"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >{{ opcao.label }}</label
                  >
                </div>
              </div>
            </div>

            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="preferencias"
              >
                Você possui alguma preferência alimentar?
              </label>
              <textarea
                v-model="padraoRegistro.preferencias"
                id="preferencias"
                rows="8"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ex: evito carne vermelha, prefiro orgânicos, não gosto de frutas cítricas..."
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

  <div class="text-center mt-52" v-else>
    <SpinnerLoagin />
  </div>
</template>

<script setup>
import https from "@/api/https.js";
import Swal from "sweetalert2";
import { userAuth } from "@/stores/auth";
import SpinnerLoagin from "@/components/sistema/SpinnerLoagin.vue";
import { UsuarioDados } from "@/utils/usuarioDados";
import { onMounted, ref, reactive } from "vue";

const auth = userAuth();
const { padraoAlimentar, padraoAlimentarDados } = UsuarioDados();

const isLoading = ref(true);

const selectDieta = [
  {
    label: "Selecione Uma opção",
    value: "",
  },
  {
    label: "Nenhuma, como de tudo",
    value: "como de tudo",
  },
  {
    label: "Vegetariana",
    value: "vegetariana",
  },
  {
    label: "Vegana",
    value: "Vegana",
  },
  {
    label: "Low Carb",
    value: "low carb",
  },
  {
    label: "Cetogênica",
    value: "cetogênica",
  },
  {
    label: "Jejum intermitente",
    value: "jejum intermitente",
  },
];

const itensRestricao = [
  {
    label: "Intolerância à lactose",
    value: "lactose",
  },
  {
    label: "Alergia ao glúten",
    value: "glúten",
  },
  {
    label: "Diabetes",
    value: "Diabetes",
  },
  {
    label: "Hipertensão",
    value: "Hipertensão",
  },
];

const padraoRegistro = reactive({
  dietaEspc: "",
  restricao: [],
  preferencias: "",
});

function verficarCampos() {
  if (
    padraoRegistro.dietaEspc === "" &&
    padraoRegistro.restricao.length === 0 &&
    padraoRegistro.preferencias === ""
  ) {
    Swal.fire("Atenção", "Preencha todos os campos", "warning");
    return false;
  }

  return true;
}

async function verificarPrefencia() {
  Swal.fire({
    title: "Processando...",
    text: "Aguarde um momento",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
  
  await https 
  .post("/ia/verificar/preferencias-alimentares", padraoRegistro, {
    headers: {
      "x-monte-ia-fit-token": auth.token,
    },
  })
  .then((res)=>{
    Swal.close();
    console.log(res);
    return true;
  }).catch((err)=>{
    Swal.close();
    console.log(err);
    const res = err.response;
    Swal.fire("Erro", `${res.data.message}`, "error");
    return false;
  })
}

async function add() {
  if(!verficarCampos()) return;

  const prefOk = await verificarPrefencia(); // importante esperar
  if (!prefOk) return;

  await https
  .post()
  .then((res)=>{
    
  }).catch((err)=>{
    
  })


}


onMounted(async () => {
  await padraoAlimentarDados();
  isLoading.value = false;
});
</script>
