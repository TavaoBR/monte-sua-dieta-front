<template>
  <section class="py-8 antialiased dark:bg-gray-900 md:py-12">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div
        class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
          v-for="index in pacotes"
          class="rounded-lg border border-gray-200 bg-gray-900 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
        >
          <div class="h-56 w-full">
            <a href="#">
              <img
                class="mx-auto h-full dark:hidden"
                src="/src/assets/FitCoins.png"
                alt=""
              />
              <img
                class="mx-auto hidden h-full dark:block"
                src="/src/assets/FitCoins.png"
                alt=""
              />
            </a>
          </div>
          <div class="pt-6">
            <a
              href="#"
              class="text-lg font-semibold leading-tight text-white hover:underline dark:text-white"
              >{{ index.Titulo }}</a
            >
            <div class="mt-4 flex items-center justify-between gap-4">
              <p
                class="text-2xl font-extrabold leading-tight text-white dark:text-white"
              >
                R$ {{ index.Valor }}
              </p>
              <button
                type="button"
                @click="comprar(index.id)"
                class="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <svg
                  class="-ms-2 me-2 h-5 w-5"
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import https from "@/api/https.js";
import Swal from "sweetalert2";
import { userAuth } from "@/stores/auth";
import { onMounted } from "vue";
import { fitCoinsApi } from "@/utils/fitCoins";

const { pacotes, pacotesFetch } = fitCoinsApi();
const auth = userAuth();

async function comprar(idPacote) {
  Swal.fire({
    title: "Processando...",
    text: "Aguarde um momento",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  await https
    .post(
      "/pagamentos/mercado-pago",
      { pacote: idPacote },
      {
        headers: {
          "x-monte-ia-fit-token": auth.token,
        },
      }
    )
    .then((res) => {
      Swal.close();
      console.log(res);
      Swal.fire({
        title: "Sucesso",
        text: res.data.message,
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        window.open(res.data.initPoint, '_blank');
      });
    })
    .catch((err) => {
      Swal.close();
      console.log(err);
      const res = err.response;
      Swal.fire("Erro", `${res.data.message}`, "error");
    });
}

onMounted(async () => {
  await pacotesFetch();
});
</script>
