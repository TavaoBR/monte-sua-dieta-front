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
      v-if="perfilNutricionalDados.encontrado === true"
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
      v-if="perfilNutricionalDados.encontrado === false"
    >
      <div
        class="w-full max-w-auto p-6 bg-white rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Adicionar Perfil Nutricional
        </h2>

        <form @submit.prevent="enviar">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="dieta"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Você segue alguma dieta específica ? "*"
              </label>
              <select
                v-model="form.tipoDieta"
                id="dieta"
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
                for="obj"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Qual o seu objetivo ? "*"
              </label>
              <select
                v-model="form.obj"
                id="obj"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option
                  v-for="opcao in selectObj"
                  :key="opcao.value"
                  :value="opcao.value"
                >
                  {{ opcao.label }}
                </option>
              </select>
            </div>
            <div>
              <label
                for="nivelAtividade"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nível de atividade física ? "*"
              </label>
              <select
                v-model="form.nivelAtividade"
                id="nivelAtividade"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option
                  v-for="opcao in selectNivilAtividade"
                  :key="opcao.value"
                  :value="opcao.value"
                >
                  {{ opcao.label }}
                </option>
              </select>
            </div>
            <div></div>
            <div>
              <label
                for="preferencias"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Preferências alimentares "*"
              </label>
              <textarea
                v-model="form.prefAlimentar"
                id="preferencias"
                rows="8"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Exemplos: gosta de arroz, frango, salada, evito carne vermelha, prefiro orgânicos, não gosto de frutas cítricas..."
              />
            </div>
            <div>
              <label
                for="restricoes"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Restrições alimentares (responda caso tenha)
              </label>
              <textarea
                v-model="form.restricoes"
                id="restricoes"
                rows="8"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Exemplo: intolerância à lactose"
              />
            </div>
            <div>
              <label
                for="condicoes"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Condições Médicas (responda caso tenha)
              </label>
              <textarea
                id="condicoes"
                v-model="form.condicoes"
                rows="8"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
              />
            </div>
            <div>
              <label
                for="alergias"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Alergias (responda caso tenha)
              </label>
              <textarea
                id="alergias"
                v-model="form.alergias"
                rows="8"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Exemplo: amendoin, camerão, etc..."
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

const isLoading = ref(true);
const auth = userAuth();

const { perfilNutricional, perfilNutricionalDados } = UsuarioDados();

const form = reactive({
  tipoDieta: "",
  obj: "",
  nivelAtividade: "",
  prefAlimentar: "",
  restricoes: "",
  condicoes: "",
  alergias: "",
});

const selectDieta = [
  {
    label: "Selecione Uma opção",
    value: "",
  },
  {
    label: "Como de tudo",
    value: "como de tudo",
  },
  // Dietas baseadas em restrição de grupos alimentares
  { label: "Vegana", value: "vegana" },
  { label: "Vegetariana", value: "vegetariana" },
  { label: "Ovolactovegetariana", value: "ovolactovegetariana" },
  { label: "Ovovegetariana", value: "ovovegetariana" },
  { label: "Lactovegetariana", value: "lactovegetariana" },
  { label: "Carnívora", value: "carnívora" },
  { label: "Pescetariana", value: "pescetariana" },
  { label: "Flexitariana", value: "flexitariana" },
  { label: "Frugívora", value: "frugívora" },

  // Dietas com foco em macronutrientes
  { label: "Low Carb", value: "low carb" },
  { label: "Cetogênica (Keto)", value: "cetogênica" },
  { label: "High Carb, Low Fat (HCLF)", value: "hclf" },
  { label: "Alta em Proteínas", value: "alta em proteinas" },

  // Dietas com foco em objetivos específicos
  { label: "Dieta de Perda de Peso", value: "perda de peso" },
  { label: "Dieta de Ganho de Massa", value: "ganho de massa" },
  { label: "Dieta Anti-inflamatória", value: "anti-inflamatoria" },
  { label: "Dieta Detox", value: "detox" },

  // Dietas modernas e tendências
  { label: "Paleolítica (Paleo)", value: "paleo" },
  { label: "Whole30", value: "whole30" },
  { label: "DASH", value: "dash" },
  { label: "Baixo FODMAP", value: "baixo fodmap" },

  // Outras
  { label: "Jejum Intermitente", value: "jejum intermitente" },
  { label: "Raw Food (Crudivorismo)", value: "crudivorismo" },
  { label: "Macrobiótica", value: "macrobiótica" },
];

const selectObj = [
  {
    label: "Selecione Uma opção",
    value: "",
  },

  {
    label: "Emagrecer",
    value: "emagrecer",
  },

  {
    label: "Ganhar Massa",
    value: "ganhar massa",
  },

  {
    label: "Manter",
    value: "manter",
  },
];

const selectNivilAtividade = [
  {
    label: "Selecione Uma opção",
    value: "",
  },

  {
    label: "Sedentário",
    value: "sedentário",
  },

  {
    label: "Moderado",
    value: "moderado",
  },

  {
    label: "Ativo",
    value: "ativo",
  },
];

function verificaPreenchimento() {
  if (
    form.tipoDieta === "" &&
    form.obj === "" &&
    form.prefAlimentar === "" &&
    form.nivelAtividade === ""
  ) {
    Swal.fire("Atenção", "Preencha os campos com os '*'", "warning");
    return false;
  }

  if (form.tipoDieta === "") {
    Swal.fire("Atenção", "Selecione o tipo o seu tipo de dieta", "warning");
    return false;
  }

  if (form.obj === "") {
    Swal.fire("Atenção", "Selecione o seu objetivo", "warning");
    return false;
  }

  if (form.nivelAtividade === "") {
    Swal.fire("Atenção", "Selecione seu nivel de atividade fisica", "warning");
    return false;
  }

  if (form.prefAlimentar === "") {
    Swal.fire("Atenção", "Descreva sua preferência alimentar", "warning");
    return false;
  }

  return true;
}

async function enviar() {
  if (!verificaPreenchimento()) return;

  Swal.fire({
    title: "Processando...",
    text: "Aguarde um momento",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  form.alergias = form.alergias || "nenhuma";
  form.condicoes = form.condicoes || "nenhuma";
  form.restricoes = form.restricoes || "nenhuma";

  await https
    .post("/perfil-nutricional/adicionar", form, {
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
  await perfilNutricional();
  isLoading.value = false;
});
</script>
