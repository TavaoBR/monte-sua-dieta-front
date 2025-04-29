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
              class="ms-1 text-sm font-bold text-blue-400 md:ms-2 dark:text-gray-400"
            >
              Treino Inteligente</a
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
          Gerar exercicios
        </h2>

        <form @submit.prevent="gerarExercicios">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="objetivo"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Objetivo
              </label>
              <select
                v-model="exercicios.obj"
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
                for="grupomuscular"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Qual Musculo deseja Gerar Exercicio ?
              </label>
              <select
                v-model="exercicios.musculo"
                id="grupomuscular"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option
                  v-for="opcao in selectGrupos"
                  :key="opcao.value"
                  :value="opcao.value"
                >
                  {{ opcao.label }}
                </option>
              </select>
            </div>

            <div>
              <label
                for="nivel"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nivel de experiência
              </label>
              <select
                id="nivel"
                v-model="exercicios.nivel"
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
              >
                Deseja qual dificuldade dos exercicios ?
              </label>
              <select
                id="dificuldade"
                v-model="exercicios.dificuldade"
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
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Gerar Exercicios
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

const exercicios = reactive({
  nome: "",
  idade: "",
  sexo: "",
  altura: "",
  peso: "",
  obj: "",
  musculo: "",
  nivel: "",
  dificuldade: "",
});

function verificarPreenchimento() {
  if (
    exercicios.obj === "" &&
    exercicios.musculo === "" &&
    exercicios.nivel === "" &&
    exercicios.dificuldade === ""
  ) {
    Swal.fire("Atenção", "Preencha todos os campos", "warning");
    return false;
  }

  if (exercicios.obj === "") {
    Swal.fire("Atenção", "Escolha o seu objetivo", "warning");
    return false;
  }

  if (exercicios.musculo === "") {
    Swal.fire(
      "Atenção",
      "Escolha Qual Musculo deseja Gerar o Exercicio ",
      "warning"
    );
    return false;
  }

  if (exercicios.nivel === "") {
    Swal.fire("Atenção", "Escolha o seu nivel", "warning");
    return false;
  }

  if (exercicios.dificuldade === "") {
    Swal.fire("Atenção", "Escolha qual dificuldade dos exercicios", "warning");
    return false;
  }

  return true;
}

async function gerarExercicios() {
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
    .post("/ia/gerar-exercicios", exercicios, {
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
        window.location.href = "/treino-inteligente/listar-musculos-escolhidos";
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
];

const selectGrupos = [
  {
    label: "Selecione uma opção",
    value: "",
  },

  {
    label: "Bíceps",
    value: "bíceps",
  },
  {
    label: "Tríceps",
    value: "tríceps",
  },
  {
    label: "Deltoides (Ombros)",
    value: "deltoides",
  },
  {
    label: "Peitoral",
    value: "peitoral",
  },
  {
    label: "Dorsal (Costas)",
    value: "dorsal",
  },
  {
    label: "Trapézio",
    value: "trapézio",
  },
  {
    label: "Abdômen",
    value: "abdômen",
  },
  {
    label: "Glúteos",
    value: "glúteos",
  },
  {
    label: "Quadríceps (Frente da coxa)",
    value: "quadríceps",
  },
  {
    label: "Posterior de Coxa",
    value: "posterior-coxa",
  },
  {
    label: "Panturrilhas",
    value: "panturrilhas",
  },
  {
    label: "Antebraços",
    value: "antebraços",
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
    label: "Difícil",
    value: "difícil",
  },
];

onMounted(async () => {
  await pessoaDados();
  exercicios.nome = pessoa.nome + " " + pessoa.sobrenome;
  exercicios.idade = pessoa.idade;
  exercicios.sexo = sexo(pessoa.sexo);
  exercicios.altura = pessoa.altura;
  exercicios.peso = pessoa.peso;
});
</script>
