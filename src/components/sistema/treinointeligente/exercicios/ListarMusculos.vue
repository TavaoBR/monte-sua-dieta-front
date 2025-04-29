<script setup>
import { exerciciosDados } from "@/utils/exerciciosDados";
import { onMounted } from "vue";
const { listaMusculos, musculos } = exerciciosDados();

onMounted(async () => {
  await musculos();
});
</script>

<template>
  <div class="mt-6 flex flex-wrap justify-start gap-6">
    <div
      class="w-full max-w-sm rounded-lg shadow-md p-6 bg-gray-900"
      v-for="index in listaMusculos"
    >
      <div class="text-white text-xl mb-2">Músculo</div>
      <h2 class="text-white text-lg font-bold mb-2">
        {{ index.GrupoMuscular }}
      </h2>
      <ul class="list-disc list-inside text-sm mb-2 text-white">
        <li>Objetivo: {{ index.Objetivo }}</li>
        <li>Nivel: {{ index.Nivel }}</li>
        <li>FiCoins Usado: {{ index.qtdFitCoins }}</li>
      </ul>
      <br />
      <a
        :href="`/treino-inteligente/listar-exercicios/${index.id}`"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Visualizar exercícios</a>
    </div>
  </div>

</template>
