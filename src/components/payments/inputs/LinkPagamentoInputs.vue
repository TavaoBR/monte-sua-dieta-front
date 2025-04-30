<template>
  <button
    type="button"
    @click="comprar"
    class="text-white items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  >
    Gerar Pagamento
  </button>
</template>

<script setup>
import https from "@/api/https";
import Swal from "sweetalert2";
import { userAuth } from "@/stores/auth";
import { defineProps } from "vue";

const auth = userAuth();

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

async function comprar() {
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
      { pacote: props.id },
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
        window.open(res.data.initPoint, "_blank");
      });
    })
    .catch((err) => {
      Swal.close();
      console.log(err);
      const res = err.response;
      Swal.fire("Erro", `${res.data.message}`, "error");
    });
}
</script>
