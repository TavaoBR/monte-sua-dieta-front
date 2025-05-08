<script setup>
import { UsuarioDados } from "@/utils/usuarioDados";
import { onMounted, ref } from "vue";
import SpinnerLoading from "@/components/sistema/SpinnerLoading.vue";

const { perfilNutricionalDados, perfilNutricional } = UsuarioDados();
const isLoading = ref(true);

function irAdicionarPadraoAlimentar() {
  window.location.href = "/usuario/adicionar/estilo/alimentar";
}

function truncarTexto(texto, limite = 60) {
  if (!texto) return "";
  return texto.length > limite ? texto.slice(0, limite).trim() + "..." : texto;
}

onMounted(async () => {
  await perfilNutricional();
  isLoading.value = false;
});
</script>

<template>
  <div
    class="rounded-xl bg-gray-900 text-white shadow-md w-full sm:w-auto sm:h-auto"
  >
    <p class="p-4 text-lg font-semibold flex items-center gap-1">
      Perfil Nutricional
    </p>

    <div class="text-center" v-if="isLoading === true">
      <SpinnerLoading />
    </div>

    <div
      class="flex items-center justify-center px-4 pb-4 text-center sm:flex-row sm:items-center sm:gap-4"
      v-if="perfilNutricionalDados.encontrado === false && isLoading === false"
    >
      <div class="font-medium flex flex-col gap-4">
        <div class="flex flex-col">
          <p class="text-white whitespace-pre-line dark:text-gray-400">
            Você não adicinou seu estilo alimentar
          </p>

          <p class="text-white whitespace-pre-line dark:text-gray-400">
            Adicione e ganhe 200 fitcoins
          </p>

          <p class="text-white whitespace-pre-line dark:text-gray-400">
            Clique no botão abaixo para adicionar seu estilo alimentar
          </p>

          <br />

          <button
            type="button"
            @click="irAdicionarPadraoAlimentar"
            class="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center items-center"
          >
            <svg
              class="w-5 h-5 text-white mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M5 8a4 4 0 1 1 7.796 1.263l-2.533 2.534A4 4 0 0 1 5 8Zm4.06 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h2.172a2.999 2.999 0 0 1-.114-1.588l.674-3.372a3 3 0 0 1 .82-1.533L9.06 13Zm9.032-5a2.907 2.907 0 0 0-2.056.852L9.967 14.92a1 1 0 0 0-.273.51l-.675 3.373a1 1 0 0 0 1.177 1.177l3.372-.675a1 1 0 0 0 .511-.273l6.07-6.07a2.91 2.91 0 0 0-.944-4.742A2.907 2.907 0 0 0 18.092 8Z"
                clip-rule="evenodd"
              />
            </svg>
            Adicionar estilo
          </button>
        </div>
      </div>
    </div>

    <div
      class="px-4 pb-4 flex flex-col sm:flex-row sm:gap-8"
      v-if="perfilNutricionalDados.encontrado === true && isLoading === false"
    >
      <div class="font-medium flex flex-col gap-4">
        <div class="flex flex-col">
          <h5 class="text-lg font-bold">Objetivo</h5>
          <h6 class="text-gray-400 text-sm">
            {{ perfilNutricionalDados.objetivo }}
          </h6>
          <h5 class="text-lg font-bold">Dieta</h5>
          <h6 class="text-gray-400 text-sm">
            {{ perfilNutricionalDados.dieta }}
          </h6>
          <h5 class="text-lg font-bold">Nível de Atividade física</h5>
          <h6 class="text-gray-400 text-sm">
            {{ perfilNutricionalDados.nivel_atividade }}
          </h6>
        </div>
      </div>

      <div class="font-medium flex flex-col gap-4">
        <div class="flex flex-col">
          <h5 class="text-lg font-bold">Preferências</h5>
          <h6
            class="text-gray-400 text-sm"
            :title="perfilNutricionalDados.preferencia"
          >
            {{ truncarTexto(perfilNutricionalDados.preferencia, 40) }}
          </h6>
          <h5 class="text-lg font-bold">Restrições</h5>
          <h6 class="text-gray-400 text-sm">
            {{ perfilNutricionalDados.restricao }}
          </h6>
        </div>
      </div>

      <div class="font-medium flex flex-col gap-4">
        <div class="flex flex-col">
          <h5 class="text-lg font-bold">Condições Médicas</h5>
          <h6
            class="text-gray-400 text-sm"
            :title="perfilNutricionalDados.condicoesMedica"
          >
            {{ truncarTexto(perfilNutricionalDados.condicoesMedica, 40) }}
          </h6>
          <h5 class="text-lg font-bold">Alergias</h5>
          <h6
            class="text-gray-400 text-sm"
            :title="perfilNutricionalDados.alergias"
          >
            {{ truncarTexto(perfilNutricionalDados.alergias, 40) }}
          </h6>
        </div>
      </div>
    </div>

    <hr
      v-if="perfilNutricionalDados.encontrado === true && isLoading === false"
    />

    <br
      v-if="perfilNutricionalDados.encontrado === true && isLoading === false"
    />

    <div
      class="px-4 pb-4"
      v-if="perfilNutricionalDados.encontrado === true && isLoading === false"
    >
      <button
        type="button"
        class="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center items-center"
      >
        <svg
          class="w-5 h-5 text-white mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M5 8a4 4 0 1 1 7.796 1.263l-2.533 2.534A4 4 0 0 1 5 8Zm4.06 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h2.172a2.999 2.999 0 0 1-.114-1.588l.674-3.372a3 3 0 0 1 .82-1.533L9.06 13Zm9.032-5a2.907 2.907 0 0 0-2.056.852L9.967 14.92a1 1 0 0 0-.273.51l-.675 3.373a1 1 0 0 0 1.177 1.177l3.372-.675a1 1 0 0 0 .511-.273l6.07-6.07a2.91 2.91 0 0 0-.944-4.742A2.907 2.907 0 0 0 18.092 8Z"
            clip-rule="evenodd"
          />
        </svg>
        Editar
      </button>
    </div>
  </div>
</template>
