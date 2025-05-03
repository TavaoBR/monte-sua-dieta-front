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
              href="/treino-inteligente"
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
              href="/treino-inteligente/fichas-treino"
              class="ms-1 text-sm font-medium text-white hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >
              Fichas de treino</a
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
        <p class="mb-4">
          <strong>Atenção</strong> caso der um erro
          <strong
            >"Resposta da IA inválida, tente novamente daqui a pouco"</strong
          >
          , clique em <strong>"Ok"</strong> e depois clique em
          <strong>"Gerar Ficha"</strong>. Isso acontece porque a IA não consegue
          enviar de primeira a resposta no formato desejado, então é necessario
          uma segunda tentativa.
        </p>
        <p class="mb-4 font-bold">Será gastos 400 FitCoins ao gerar a ficha</p>

        <form @submit.prevent="gerarFicha">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="nomeFicha"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Nome da ficha (Crie um nome para essa ficha)</label
              >
              <input
                type="text"
                v-model="formDados.nomeFicha"
                id="nomeFicha"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="obj"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Objetivo</label
              >
              <select
                id="obj"
                v-model="formDados.obj"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option
                  v-for="opcao in selectObjetivo"
                  :key="opcao.value"
                  :value="opcao.value"
                >
                  {{ opcao.label }}
                </option>
              </select>
            </div>
            <div>
              <label
                for="foco"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Foco Principal</label
              >
              <select
                id="foco"
                v-model="formDados.foco"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option
                  v-for="opcao in selectFoco"
                  :key="opcao.value"
                  :value="opcao.value"
                >
                  {{ opcao.label }}
                </option>
              </select>
            </div>

            <div>
              <label
                for="freqTreino"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Frequência de treino de semenal</label
              >
              <select
                id="freqTreino"
                v-model="formDados.frequencia"
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
                for="experiencia"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Nível de experiência</label
              >
              <select
                v-model="formDados.experiencia"
                id="experiencia"
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
                for="dificuldade"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Dificuldade exercícios</label
              >
              <select
                id="dificuldade"
                v-model="formDados.dificuldade"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option
                  v-for="opcao in selectDificuldade"
                  :key="opcao.value"
                  :value="opcao.value"
                >
                  {{ opcao.label }}
                </option>
              </select>
            </div>

            <div>
              <label
                for="qtdExercicios"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Quantidade de exercícios por dia</label
              >
              <select
                v-model="formDados.qtdExercicios"
                id="qtdExeecicios"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option
                  v-for="opcao in selectQtdExercicio"
                  :key="opcao.value"
                  :value="opcao.value"
                >
                  {{ opcao.label }}
                </option>
              </select>
            </div>

            <div>
              <label
                for="cardioFavorito"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Cardio favorito</label
              >
              <select
                v-model="formDados.cardio"
                id="cardioFavorito"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option
                  v-for="opcao in selectCardio"
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

const formDados = reactive({
  nome: "",
  idade: "",
  sexo: "",
  altura: "",
  peso: "",
  nomeFicha: "",
  obj: "",
  foco: "",
  frequencia: "",
  experiencia: "",
  dificuldade: "",
  qtdExercicios: "",
  cardio: "",
});

function verificarPreenchimento() {
  if (
    formDados.nomeFicha === "" &&
    formDados.foco === "" &&
    formDados.frequencia === "" &&
    formDados.experiencia === "" &&
    formDados.dificuldade === "" &&
    formDados.qtdExercicios === "" &&
    formDados.cardio === ""
  ) {
    Swal.fire("Atenção", "Preencha todos os campos", "warning");
    return false;
  }

  if (formDados.nomeFicha === "") {
    Swal.fire("Atenção", "Coloque um nome para essa ficha", "warning");
    return false;
  }

  if (formDados.obj === "") {
    Swal.fire("Atenção", "Selecione seu objetivo", "warning");
    return false;
  }

  if (formDados.foco === "") {
    Swal.fire("Atenção", "Selecione o foco principal", "warning");
    return false;
  }

  if (formDados.frequencia === "") {
    Swal.fire("Atenção", "Selecione a frequência", "warning");
    return false;
  }

  if (formDados.experiencia === "") {
    Swal.fire("Atenção", "Selecione seu nível experiência", "warning");
    return false;
  }

  if (formDados.dificuldade === "") {
    Swal.fire("Atenção", "Selecione a dificuldade dos exercícios", "warning");
    return false;
  }

  if (formDados.qtdExercicios === "") {
    Swal.fire("Atenção", "Selecione a quantidade de exercícios", "warning");
    return false;
  }

  if (formDados.cardio === "") {
    Swal.fire("Atenção", "Selecione o cárdio", "warning");
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
    .post("/ia/gerar-ficha-treino", formDados, {
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
        window.location.href = "/treino-inteligente/fichas-treino";
      });
    })
    .catch((err) => {
      Swal.close();
      console.log(err);
      const res = err.response;
      Swal.fire("Erro", `${res.data.message}`, "error");
    });
}

const selectObjetivo = [
  {
    label: "Selecione um objetivo",
    value: "",
  },
  {
    label: "Hipertrofia com foco em força e definição",
    value: "hipertrofia com foco em força e definição",
  },
  {
    label: "Hipertrofia com foco em força",
    value: "hipertrofia com foco em força",
  },
  {
    label: "Hipertrofia com foco em definição",
    value: "hipertrofia com definição",
  },
  {
    label: "Definição com foco em resistência",
    value: "definição com foco em resistência",
  },
  {
    label: "Emagrecimento com preservação muscular",
    value: "emagrecimento preservação muscular",
  },
  {
    label: "Ganho de força e potência",
    value: "ganho de força e potência",
  },
  {
    label: "Reabilitação e condicionamento físico",
    value: "reabilitação e condicionamento físico",
  },
  {
    label: "Melhora do condicionamento cardiorrespiratório",
    value: "condicionamento cardiorrespiratório",
  },
  {
    label: "Manutenção geral da saúde e bem-estar",
    value: "manutenção saúde e bem estar",
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

const selectDificuldade = [
  {
    label: "Selecione uma opção",
    value: "",
  },
  {
    label: "Fácil",
    value: "fácil",
  },
  {
    label: "Médio",
    value: "médio",
  },
  {
    label: "Dificíl",
    value: "dificíl",
  },
];

const selectFreq = [
  {
    label: "Selecione uma opção",
    value: "",
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
  {
    label: "6x por semana",
    value: "6x",
  },
];

const selectQtdExercicio = [
  {
    label: "Selecione uma opção",
    value: "",
  },
  {
    label: "3",
    value: "3",
  },
  {
    label: "4",
    value: "4",
  },
  {
    label: "5",
    value: "5",
  },
];

const selectFoco = [
  {
    label: "Selecione uma opção",
    value: "",
  },
  {
    label: "Parte Superior do corpo",
    value: "Parte Superior do corpo",
  },
  {
    label: "Parte Inferior do corpo",
    value: "Parte Inferior do corpo",
  },
  {
    label: "Parte Posterior do corpo",
    value: "Parte Posterior do corpo",
  },
];

const selectCardio = [
  {
    label: "Selecione uma opção",
    value: "",
  },
  {
    label: "Não quero fazer cárdio",
    value: "não quero fazer cárdio",
  },
  // Bicicleta Ergométrica
  {
    label: "Bicicleta Ergométrica - Leve",
    value: "bicicleta ergométrica - leve",
  },
  {
    label: "Bicicleta Ergométrica - Moderado",
    value: "bicicleta ergométrica - moderado",
  },
  {
    label: "Bicicleta Ergométrica - Intenso",
    value: "bicicleta ergométrica - intenso",
  },
  // Esteira
  {
    label: "Esteira - Leve",
    value: "esteira - leve",
  },
  {
    label: "Esteira - Moderado",
    value: "esteira - moderado",
  },
  {
    label: "Esteira - Intenso",
    value: "esteira - intenso",
  },
  // Escada
  {
    label: "Escada - Leve",
    value: "escada - leve",
  },
  {
    label: "Escada - Moderado",
    value: "escada - moderado",
  },
  {
    label: "Escada - Intenso",
    value: "escada - intenso",
  },
  // Outros opcionais
  {
    label: "Pular Corda - Leve",
    value: "pular corda - leve",
  },
  {
    label: "Pular Corda - Moderado",
    value: "pular corda - moderado",
  },
  {
    label: "Pular Corda - Intenso",
    value: "pular corda - intenso",
  },
  {
    label: "Caminhada ao Ar Livre - Leve",
    value: "caminhada ao ar livre - leve",
  },
  {
    label: "Caminhada ao Ar Livre - Moderado",
    value: "caminhada ao ar livre - moderado",
  },
  {
    label: "Caminhada ao Ar Livre - Intenso",
    value: "caminhada ao ar livre - intenso",
  },
];

onMounted(async () => {
  await pessoaDados();
  formDados.nome = pessoa.nome + " " + pessoa.sobrenome;
  formDados.idade = pessoa.idade;
  formDados.sexo = sexo(pessoa.sexo);
  formDados.altura = pessoa.altura;
  formDados.peso = pessoa.peso;
});
</script>
