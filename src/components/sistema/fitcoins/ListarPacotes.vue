<template>
  <section class="antialiased dark:bg-gray-900 ">
    <div class="flex flex-wrap justify-start gap-6">
      <div
        v-for="index in pacotes"
        :key="index.id"
        class="w-full max-w-sm rounded-lg border border-gray-200 bg-gray-900 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
      >
        <div class="h-56 w-full mb-4">
          <a href="#">
            <img
              class="mx-auto h-full dark:hidden"
              src="/src/assets/FitCoins.png"
              alt="Imagem FitCoins"
            />
            <img
              class="mx-auto hidden h-full dark:block"
              src="/src/assets/FitCoins.png"
              alt="Imagem FitCoins (Dark)"
            />
          </a>
        </div>
        <h2
          class="text-lg font-bold leading-tight text-white mb-2 dark:text-white"
        >
          {{ index.Titulo }}
        </h2>
        <p class="text-2xl font-extrabold text-white mb-4">
          R$ {{ index.Valor }}
        </p>
        <a
          :href="`/fit-coins/pacotes/detalhes/${index.id}`"
          class="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <svg
            class="-ms-2 me-2 h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
            />
          </svg>
          Mais Detalhes
        </a>
      </div>
    </div>
  </section>
</template>


<script setup>
import { onMounted } from "vue";
import { fitCoinsApi } from "@/utils/fitCoins";

const { pacotes, pacotesFetch } = fitCoinsApi();

onMounted(async () => {
  await pacotesFetch();
});
</script>
