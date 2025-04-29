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

    <h2 class="mb-4 text-4xl font-extrabold dark:text-white">
      Bem Vindo ao Modulo
      <span class="text-blue-600 dark:text-blue-500">Treino Inteligente</span>
    </h2>

    <div class="flex flex-wrap gap-4">
      <div
        class="max-w-sm p-6 bg-gray-900 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="/treino-inteligente/listar-musculos-escolhidos">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white"
          >
            Gerar Exercicíos
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-200 dark:text-gray-400">
          Esta opção a IA irá gerar uma lista completa de exercícios baseada no grupo
          muscular escolhido. Até o momento, esta função é válida
          apenas para praticantes que frequentam academia regularmente
        </p>
        <a
          href="/treino-inteligente/listar-musculos-escolhidos"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ver mais
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>

      <div
        class="max-w-sm p-6 bg-gray-900 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white"
          >
            Gerar Ficha de treino
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-200 dark:text-gray-400">
          Esta opção gera uma ficha de treino completa personalizada para você.
          Recomendo gerar primeiro os exercícios.
          Assim, a IA poderá distribuir melhor os dias de treino e os grupos
          musculares, de forma eficiente.
        </p>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ver Mais
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
