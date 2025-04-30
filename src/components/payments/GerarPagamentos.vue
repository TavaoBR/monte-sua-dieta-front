<template>
  <div
    class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8"
    v-show="metodoPagamento.clicado === false"
  >
    <a
      href="#"
      title=""
      class="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      role="button"
    >
      <svg
        class="w-5 h-5 -ms-2 me-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 12h14M5 12l4-4m-4 4 4 4"
        />
      </svg>
      voltar
    </a>

    <button
      @click="exibirMetodoDepagamento"
      class="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
      role="button"
    >
      <svg
        class="w-5 h-5 -ms-2 me-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
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

      Comprar
    </button>
  </div>

  <div
    class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8 flex-col w-full"
    v-show="metodoPagamento.clicado === true"
  >
    <div class="mb-4 border-b border-gray-200 dark:border-gray-700 w-full">
      <span class="text-center">Escolha o metodo de pagamento</span>
      <ul
        class="flex flex-wrap -mb-px text-sm font-medium text-center"
        id="default-tab"
        data-tabs-toggle="#default-tab-content"
        role="tablist"
      >
        <li class="me-2" role="presentation">
          <button
            class="inline-block p-4 border-b-2 rounded-t-lg"
            id="profile-tab"
            data-tabs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Link Pagamento
          </button>
        </li>
        <li class="me-2" role="presentation">
          <button
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="dashboard-tab"
            data-tabs-target="#dashboard"
            type="button"
            role="tab"
            aria-controls="dashboard"
            aria-selected="false"
          >
            Pix
          </button>
        </li>
        <!--<li class="me-2" role="presentation">
          <button
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="settings-tab"
            data-tabs-target="#settings"
            type="button"
            role="tab"
            aria-controls="settings"
            aria-selected="false"
          >
            Settings
          </button>
        </li>-->
        <!--<li role="presentation">
          <button
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="contacts-tab"
            data-tabs-target="#contacts"
            type="button"
            role="tab"
            aria-controls="contacts"
            aria-selected="false"
          >
            Contacts
          </button>
        </li>-->
      </ul>
    </div>
    <div id="default-tab-content" class="w-full">
      <div
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <LinkPagamentoInputs :id="props.id"/>
      </div>
      <div
        class="hidden rounded-lg dark:bg-gray-800"
        id="dashboard"
        role="tabpanel"
        aria-labelledby="dashboard-tab"
      >
        <PixInputs :id="props.id"/>
      </div>
      <!--<div
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        id="settings"
        role="tabpanel"
        aria-labelledby="settings-tab"
      >
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white"
            >Settings tab's associated content</strong
          >. Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
      <div
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        id="contacts"
        role="tabpanel"
        aria-labelledby="contacts-tab"
      >
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white"
            >Contacts tab's associated content</strong
          >. Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>-->
    </div>
  </div>
</template>

<script setup>
import LinkPagamentoInputs from "./inputs/LinkPagamentoInputs.vue";
import PixInputs from "./inputs/PixInputs.vue";
import { defineProps } from "vue";
import { onMounted, reactive } from "vue";
const metodoPagamento = reactive({
  clicado: false,
});

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

function exibirMetodoDepagamento() {
  metodoPagamento.clicado = true;
  return metodoPagamento.clicado;
}
</script>
