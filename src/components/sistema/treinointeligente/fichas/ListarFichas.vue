<template>
  <div class="mt-6 flex flex-wrap justify-start gap-6">
    <div
      class="w-full max-w-sm rounded-lg shadow-md p-6 bg-gray-900"
      v-for="index in lista"
    >
      <div class="text-white text-xl mb-2">📋</div>
      <h2 class="text-white text-lg font-bold mb-2">
        {{ index.NomeFicha }}
      </h2>
      <ul class="list-disc list-inside text-sm mb-2 text-white">
        <li>Foco Principal: {{ index.FocoPrincipal }}</li>
        <li>Objetivo: {{ index.Objetivo }}</li>
        <li>Experiência: {{ index.Experiencia }}</li>
        <li>Dificuldade: {{ index.Dificuldade }}</li>
        <li>FiCoins Usado: {{ index.PontosUsados }}</li>
      </ul>
      <br />
      <a
        :href="`/treino-inteligente/fichas-treino/${index.Token}`"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Visualizar exercícios</a
      >
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
const { lista, fichas } = fichasGeradasDados();
import { fichasGeradasDados } from "@/utils/fichasGeradas";

onMounted(async () => {
  await fichas();
});
</script>
