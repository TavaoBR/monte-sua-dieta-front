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
              href="/ficha-treino"
              class="ms-1 text-sm font-medium text-white hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >
              Treino Inteligente</a
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
              class="ms-1 text-sm font-bold text-blue-400 md:ms-2 dark:text-gray-400"
            >
              Gerar</a
            >
          </div>
        </li>
      </ol>
    </nav>

    <div class="flex bg-gray-100 dark:bg-gray-900">
      <div
        class="w-full max-w-auto p-6 bg-white rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Gerar Ficha
        </h2>

        <form @submit.prevent="gerarFicha">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="objetivo"
              >
                Objetivo
              </label>
              <select
                v-model="ficha.objetivo"
                id="objetivo"
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
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="nivel"
              >
                Nivel de experiência
              </label>
              <select
                v-model="ficha.nivel"
                id="nivel"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option
                  v-for="opcao in selectNivel"
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
                for="freq"
              >
                Frequência Semanal de treino
              </label>
              <select
                v-model="ficha.frequencia"
                id="freq"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option
                  v-for="opcao in selectFreq"
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
                for="local"
              >
                Local disponíveis para treino
              </label>
              <select
                v-model="ficha.local"
                id="local"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option
                  v-for="opcao in localDisponivel"
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
                for="grupo-muscular"
              >
                Grupos musculares que quer priorizar
              </label>
              <div class="flex flex-wrap gap-4">
                <div
                  class="flex items-center me-4"
                  v-for="opcao in checkGrupos"
                >
                  <input
                    v-model="ficha.grupos"
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
                for="incluir"
              >
                Quer incluir exercícios cardiovasculares?
              </label>
              <select
                v-model="ficha.cardio"
                id="incluir"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option
                  v-for="opcao in selectIncluir"
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
                for="sugestao"
              >
                Deseja sugestões de aquecimento e alongamento?
              </label>
              <select
                v-model="ficha.alogamento"
                id="sugestao"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option
                  v-for="opcao in selectSugestao"
                  :key="opcao.value"
                  :value="opcao.value"
                >
                  {{ opcao.label }}
                </option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Gerar Ficha
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import https from "@/api/https.js";
import Swal from "sweetalert2";
import { UsuarioDados } from "@/utils/usuarioDados";
const { pessoa, pessoaDados } = UsuarioDados();
import { userAuth } from "@/stores/auth";
import { onMounted, reactive } from "vue";

const auth = userAuth();

function sexo(sexo) {
  switch (sexo) {
    case "M":
      sexo = "Masculino";
      break;

    case "F":
      sexo = "Feminino";
      break;
  }

  return sexo;
}

const ficha = reactive({
  nome: "",
  idade: "",
  sexo: "",
  altura: "",
  peso: "",
  objetivo: "",
  nivel: "",
  frequencia: "",
  local: "",
  grupos: [],
  cardio: "",
  alogamento: "",
});




function verificarPreenchimento() {
  if (
    ficha.objetivo === "" &&
    ficha.nivel === "" &&
    ficha.frequencia === "" &&
    ficha.local === "" &&
    ficha.grupos.length === 0 &&
    ficha.cardio === "" &&
    ficha.alogamento === ""
  ) {
    Swal.fire("Atenção", "Preencha todos os campos", "warning");
    return false;
  }

  if (ficha.objetivo === "") {
    Swal.fire("Atenção", "Escolha o seu objetivo", "warning");
    return false;
  }

  if (ficha.nivel === "") {
    Swal.fire("Atenção", "Escolha o seu nivel", "warning");
    return false;
  }

  if (ficha.frequencia === "") {
    Swal.fire(
      "Atenção",
      "Escolha a frequência semanal no qual treina",
      "warning"
    );
    return false;
  }

  if (ficha.local === "") {
    Swal.fire(
      "Atenção",
      "Escolha a opção do local que você atualmente treina",
      "warning"
    );
    return false;
  }

  if (ficha.grupos.length === 0) {
    Swal.fire(
      "Atenção",
      "Marque pelo menos uma opção Grupos musculares",
      "warning"
    );
    return false;
  }

  if (ficha.cardio === "") {
    Swal.fire(
      "Atenção",
      "Escolha se deseja incluir exercícios cardiovasculares",
      "warning"
    );
    return false;
  }

  if (ficha.alogamento === "") {
    Swal.fire(
      "Atenção",
      "Escolha se deseja ter sugestões de alogamento",
      "warning"
    );
    return false;
  }

  return true;
}

async function gerarFicha() {
  if (!verificarPreenchimento()) return;

  Swal.fire({
    title: "Processando...",
    text: "Aguarde um momento",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  await https
    .post("/ia/ficha-treino", ficha, {
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
        window.location.href = "/ficha-treino";
      });
    })
    .catch((err) => {
      Swal.close();
      console.log(err);
      const res = err.response;
      Swal.fire("Erro", `${res.data.message}`, "error");
    });
}

const selectObj = [
  {
    label: "Selecione uma opção",
    value: "",
  },
  {
    label: "Hipertrofia",
    value: "hipertrofia",
  },
  {
    label: "Emagrecimento",
    value: "emagrecimento",
  },
  {
    label: "Condicionamento",
    value: "condicionamento",
  },
  {
    label: "Resistência",
    value: "resistência",
  },
  {
    label: "Reabilitação",
    value: "reabilitação",
  },
];

const selectNivel = [
  {
    label: "Selecione uma opção",
    value: "",
  },
  {
    label: "Iniciante",
    value: "iniciante",
  },
  {
    label: "Intermediário",
    value: "intermediário",
  },
  {
    label: "Avançado",
    value: "avançado",
  },
];

const selectFreq = [
  {
    label: "Selecione uma opção",
    value: "",
  },
  {
    label: "1x por semana",
    value: "1x",
  },
  {
    label: "2x por semana",
    value: "2x",
  },
  {
    label: "3x por semana",
    value: "3x",
  },
  {
    label: "4x por semana",
    value: "4x",
  },
  {
    label: "5x por semana",
    value: "5x",
  },
];

const localDisponivel = [
  {
    label: "Selecione uma opção",
    value: "",
  },
  {
    label: "Academia",
    value: "academia",
  },
  {
    label: "Em casa",
    value: "em casa",
  },
  {
    label: "Ar livre",
    value: "ar livre",
  },
];

const selectIncluir = [
  {
    label: "Selecione uma opção",
    value: "",
  },
  {
    label: "Sim",
    value: "sim",
  },
  {
    label: "Não",
    value: "não",
  },
];

const selectSugestao = [
  {
    label: "Selecione uma opção",
    value: "",
  },
  {
    label: "Sim",
    value: "sim",
  },
  {
    label: "Não",
    value: "não",
  },
];

const checkGrupos = [
  {
    label: "Todos os grupos",
    value: "todos",
  },
  {
    label: "Braços",
    value: "braços",
  },
  {
    label: "Pernas",
    value: "pernas",
  },
  {
    label: "Costas",
    value: "costas",
  },
  {
    label: "Peito",
    value: "peito",
  },
  {
    label: "Abdômen",
    value: "abdômen",
  },
];

onMounted(async ()=>{
    await pessoaDados();
    ficha.nome = pessoa.nome + " " + pessoa.sobrenome;
    ficha.idade = pessoa.idade;
    ficha.sexo = sexo(pessoa.sexo);
    ficha.altura = pessoa.altura;
    ficha.peso = pessoa.peso;  
})
</script>
