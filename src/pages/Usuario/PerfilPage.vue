<template>
  <div class="rounded-lg mt-14" >
    <!-- Breadcrumb -->
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
              Perfil</a
            >
          </div>
        </li>
      </ol>
    </nav>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      <!-- Card 1 -->

      <UsuarioInfo />

      <!-- Card 2 -->
      <PessoaisInfo />
    </div>

    <!--<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      <PerfilNutricional />

      <div
        class="h-auto rounded-xl bg-gray-900 text-white shadow-md w-full sm:w-auto sm:h-auto"
      >
        <p class="p-4 text-lg font-semibold flex items-center gap-1">
          Hábitos Alimentares
        </p>
      </div>
    </div>-->

    <!-- Card grande -->
    <!--<div
      class="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800"
    ></div>-->

    <!-- Grid cards pequenos -->
    <!--<div class="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-4">
      <div
        v-for="i in 4"
        :key="'a' + i"
        class="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800"
      >
        <svg
          class="w-6 h-6 text-gray-400 dark:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </div>
    </div>-->
  </div>

</template>

<script setup>
import UsuarioInfo from "@/components/sistema/perfil/UsuarioInfo.vue";
import PessoaisInfo from "@/components/sistema/perfil/PessoaisInfo.vue";
//import PerfilNutricional from "@/components/sistema/perfil/PerfilNutricional.vue";

</script>
