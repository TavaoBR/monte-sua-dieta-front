<script setup>
import { onMounted } from "vue";
import { fitCoinsApi } from "@/utils/fitCoins";
import { useRoute } from "vue-router";
const route = useRoute();
const id = route.params.id;

const { pacote, fitCoin} = fitCoinsApi();

onMounted(async () => {
  await fitCoin(id);
});
</script>

<template>
  <section class="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
        <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
          <img
            class="w-full dark:hidden"
            src="/src/assets/FitCoins.png"
            alt=""
          />
          <img
            class="w-full hidden dark:block"
            src="/src/assets/FitCoins.png"
            alt=""
          />
        </div>

        <div class="mt-6 sm:mt-8 lg:mt-0">
          <h1
            class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
          >
            {{ pacote.Titulo }}
          </h1>
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p
              class="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
            >
              R${{ pacote.Valor }},00
            </p>
          </div>


          <GerarPagamentos />


          <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

          <p class="mb-6 text-gray-500 dark:text-gray-400">
            {{ pacote.Descricao }}
          </p>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GerarPagamentos from "@/components/payments/GerarPagamentos.vue";
</script>