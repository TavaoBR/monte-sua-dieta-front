<script setup>
import { fichasGeradasDados } from "@/utils/fichasGeradas";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const fichaId = route.params.id;

const { fichaDados, ficha } = fichasGeradasDados();

onMounted(async () => {
  await ficha(fichaId);
});
</script>

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

    <div
      class="max-w-96xl p-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
    >
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ fichaDados.resultado }}
      </p>
    </div>
  </div>
</template>
