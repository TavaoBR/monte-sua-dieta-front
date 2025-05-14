<template>
  <!-- Modal toggle -->
  <div>
    <button
      id="defaultModalButton"
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
      class="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      type="button"
    >
      Gerar Novo Plano Alimentar
    </button>
  </div>

  <!-- Main modal -->
  <div
    id="defaultModal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden w-full min-h-screen"
  >
    <div class="relative p-4 w-full max-w-2xl">
      <!-- Modal content -->
      <div
        class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"
      >
        <!-- Modal header -->
        <div
          class="flex justify-between items-center pb-4 rounded-t border-b sm:mb-5 dark:border-gray-600"
        >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Gerar Plano Alimentar
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="defaultModal"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->

        <div class="mb-4 text-sm text-gray-700 dark:text-gray-300">
          <p class="mb-2">
            💡 <strong>Importante:</strong> Este plano será gerado com base nas
            informações do seu perfil nutricional e dados pessoais. Se precisar
            atualizar algum dado, acesse a seção <strong>"Perfil"</strong> e
            clique em <strong>"Editar"</strong> nas áreas de Perfil Nutricional
            ou Informações Pessoais.
          </p>
          <p class="mb-2">
            💡 <strong>Importante:</strong> O seu objetivo principal é
            <strong>{{ form.obj }}</strong>
          </p>
          <p class="mb-2">
            💡 <strong>Importante:</strong> Preencha o nome do seu plano
            alimentar de forma clara, como "Plano para emagrecer em 30 dias".
            Considere o nome do plano de acordo com seu objetivo
          </p>
          <p class="mb-2">
            ✅ Após gerar o plano, ele ficará disponível na sua área pessoal.
          </p>
          <p class="mb-2">
            💰 Esse plano será gerado usando <strong>400 FitCoins</strong>.
            Certifique-se de que você tem saldo suficiente.
          </p>
        </div>

        <form @submit.prevent="gerarPlano">
          <div class="mb-4">
            <label
              for="nomePlano"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Nome do seu Plano Alimentar</label
            >
            <input
              type="text"
              v-model="form.nomePlano"
              id="nomePlano"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>
          <button
            type="submit"
            class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Gerar por 400 FitCoins
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { UsuarioDados } from "@/utils/usuarioDados";
import https from "@/api/https.js";
import Swal from "sweetalert2";
import { userAuth } from "@/stores/auth";
const { perfilNutricionalDados, perfilNutricional } = UsuarioDados();
const { pessoa, pessoaDados } = UsuarioDados();

const auth = userAuth();

const form = reactive({
  nome: "",
  idade: "",
  sexo: "",
  altura: "",
  peso: "",
  obj: "",
  nivelAtividade: "",
  tipoDieta: "",
  restricoes: "",
  condicoes: "",
  nomePlano: "",
});

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

async function gerarPlano() {
  if (form.nomePlano === "") {
    Swal.fire(
      "Atenção",
      "Preencha o campo 'Nome do plano alimentar'",
      "warning"
    );

    return false;
  }

  Swal.fire({
    title: "Processando...",
    text: "Aguarde um momento",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  await https
    .post("/ia/gerar-plano-alimentar", form, {
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
        window.location.reload();
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
  await perfilNutricional();
  form.nome = pessoa.nome + " " + pessoa.sobrenome;
  form.idade = pessoa.idade;
  form.sexo = sexo(pessoa.sexo);
  form.altura = pessoa.altura;
  form.peso = pessoa.peso;
  form.obj = perfilNutricionalDados.objetivo;
  form.nivelAtividade = perfilNutricionalDados.nivel_atividade;
  form.tipoDieta = perfilNutricionalDados.dieta;
  form.restricoes = perfilNutricionalDados.restricao;
  form.condicoes = perfilNutricionalDados.condicoesMedica;
});
</script>
