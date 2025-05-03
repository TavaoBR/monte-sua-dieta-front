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
              class="ms-1 text-sm font-bold text-blue-400 md:ms-2 dark:text-gray-400"
            >
              Fichas de treino</a
            >
          </div>
        </li>
      </ol>
    </nav>

    <h2 class="mb-4 text-3xl font-extrabold dark:text-white">
      Fichas de treino geradas:
      <span class="text-blue-600 dark:text-blue-500">confira abaixo</span>
    </h2>

    <p class="mb-4 text-1xl font-extrabold ">
          Aviso: estas fichas são geradas com o auxílio de inteligência
          artificial. Para um acompanhamento mais eficaz e seguro, consulte um
          profissional da área.
        </p>

    <a
      href="/treino-inteligente/fichas-treino/gerar"
      class="mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >Gerar Nova Ficha de treino</a
    >

    <ListarFichas />

  </div>
</template>

<script setup>
import ListarFichas from '@/components/sistema/treinointeligente/fichas/ListarFichas.vue';
</script>
