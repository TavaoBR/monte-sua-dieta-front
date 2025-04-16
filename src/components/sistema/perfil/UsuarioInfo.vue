<script setup>
import { UsuarioDados } from "@/utils/usuarioDados";
import { onMounted, ref } from "vue";
import SpinnerLoading from "@/components/sistema/SpinnerLoading.vue";

const { usuario, usuarioDados } = UsuarioDados();
const isLoading = ref(true);

onMounted(async () => {
  await usuarioDados();
  isLoading.value = false;
});
</script>
<template>
  <div
    class="rounded-xl bg-gray-900 text-white shadow-md w-full sm:w-auto sm:h-auto"
  >
    <!-- Título -->
    <p class="p-4 text-lg font-semibold flex items-center gap-1">
      Informações do usuario
    </p>

    <div class="text-center" v-if="isLoading === true">
      <SpinnerLoading />
    </div>

    <!-- Container principal -->
    <div
      v-if="isLoading === false"
      class="px-4 pb-4 flex flex-col items-center text-center sm:text-left sm:flex-row sm:items-center sm:gap-4"
    >
      <!-- Imagem do usuário -->
      <img
        class="w-24 h-24 rounded-lg object-cover mb-3 sm:mb-0"
        :src="`data:image/;base64,${usuario.avatar}`"
        alt="Profile"
      />

      <!-- Infos -->
      <div class="font-medium">
        <div class="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <h5 class="text-xl font-bold">{{ usuario.nomeUsuario }}</h5>
        </div>
        <h6 class="text-gray-400 text-sm">{{ usuario.email }}</h6>
      </div>
    </div>

    <hr v-if="isLoading === false" />

    <br v-if="isLoading === false" />

    <!-- Botão editar -->
    <div class="px-4 pb-4" v-if="isLoading === false">
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
