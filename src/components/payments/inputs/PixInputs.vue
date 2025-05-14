<template>
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div class="mx-auto max-w-5xl">
      <div class="lg:flex lg:items-start lg:gap-12">
        <form
          @submit.prevent="gerarPix"
          class="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8"
        >
          <div
            class="mb-6 grid grid-cols-2 gap-4"
            v-show="pagamentoPix.status === ''"
          >
            <div class="col-span-2 sm:col-span-1">
              <label
                for="full_name"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Primeiro Nome
              </label>
              <input
                type="text"
                v-model="form.nome"
                id="full_name"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              />
            </div>

            <div class="col-span-2 sm:col-span-1">
              <label
                for="sobrenome"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Sobrenome
              </label>
              <input
                v-model="form.sobrenome"
                type="text"
                id="sobrenome"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              />
            </div>

            <div class="col-span-2 sm:col-span-1">
              <label
                for="cpf"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                CPF
              </label>
              <input
                type="text"
                id="cpf"
                v-model="form.cpf"
                @input="maskCpf"
                maxlength="14"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              />
            </div>
          </div>

          <div class="mb-6" v-show="pagamentoPix.status === 'pending'">
            <label
              for="qrcode"
              class="block text-center mx-auto text-sm font-medium text-gray-900 dark:text-white"
            >
              Qrcode
            </label>
            <img
              id="qrcode"
              class="mx-auto h-auto w-full max-w-xs"
              :src="`data:image/png;base64,${pagamentoPix.qrcode}`"
              alt="QR Code do pagamento via Pix"
            />
            <hr />

            <br />

            <label
              for="copiacola"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Pix Copia e Cola
            </label>

            <input
              id="copiacola"
              type="text"
              @click="copiarPayload"
              readonly
              :value="pagamentoPix.payload"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
            />
          </div>

          <div class="mb-6" v-show="pagamentoPix.status === 'approved'">
            <div
              class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"
            >
              <div
                class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5"
              >
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Sucesso</span>
              </div>
              <p
                class="mb-4 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Pagamento aprovado
              </p>
            </div>
          </div>

          <button
            v-show="pagamentoPix.status === ''"
            type="submit"
            class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Gerar Pix
          </button>

          <a
            v-show="pagamentoPix.status === 'pending'"
            @click="checarStatusPagamento"
            class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Já Paguei
          </a>
        </form>
      </div>

      <p
        class="mt-6 text-center text-gray-500 dark:text-gray-400 sm:mt-8 lg:text-left"
      >
        Pagamento Será destinado - Gustavo de Oliveira Fagundes - Mercado Pago
      </p>
    </div>
  </div>
</template>

<script setup>
import https from "@/api/https";
import Swal from "sweetalert2";
import { userAuth } from "@/stores/auth";
import { reactive } from "vue";
import { defineProps } from "vue";

const auth = userAuth();

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const form = reactive({
  nome: "",
  sobrenome: "",
  cpf: "",
  pacote: props.id,
});

const pagamentoPix = reactive({
  qrcode: "",
  payload: "",
  correlationId: "",
  status: "",
});

function maskCpf(e) {
  let value = e.target.value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  form.cpf = value;
  e.target.value = value;
}

function verificarPreenchimento() {
  if (form.nome === "" && form.sobrenome === "" && form.cpf === "") {
    Swal.fire("Atenção", "Preencha todos os campos", "warning");
    return false;
  }

  if (form.nome === "") {
    Swal.fire("Atenção", "Preencha o seu primeiro", "warning");
    return false;
  }

  if (form.sobrenome === "") {
    Swal.fire("Atenção", "Preencha o sobrenome", "warning");
    return false;
  }

  if (form.cpf === "") {
    Swal.fire("Atenção", "Preencha o cpf", "warning");
    return false;
  }

  if (form.cpf.length != 14) {
    Swal.fire("Atenção", "Informe um cpf válido", "warning");
    return false;
  }

  removerMask(form.cpf);

  return true;
}

function removerMask(cpf) {
  form.cpf = cpf.replace(/\D/g, "");
  return form.cpf;
}

function copiarPayload() {
  navigator.clipboard.writeText(pagamentoPix.payload);
  Swal.fire(
    "Sucesso",
    "Copiado para a área de transferência, cole no seu app de banco para efetuar o pagamento.",
    "success"
  );
}

async function checarStatusPagamento() {
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
      "/pagamentos/mercado-pago/pix/foi-pago",
      { correlationId: pagamentoPix.correlationId },
      {
        headers: {
          "x-api-minha-ia-fit-token": auth.token,
        },
      }
    )
    .then((res) => {
      Swal.close();
      const data = res.data;
      if (res.status === 202) {
        Swal.fire("Atenção", `${data.message}`, "warning");
      }

      if (res.status === 200) {
        pagamentoPix.status = "approved";
      }
    })
    .catch((err) => {
      Swal.close();
      console.log(err);
      const res = err.response;
      Swal.fire("Erro", `${res.data.message}`, "error");
    });
}

async function gerarPix() {
  if (!verificarPreenchimento()) return;
  Swal.fire({
    title: "Processando...",
    text: "Aguarde um momento",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  await https
    .post("/pagamentos/mercado-pago/pix", form, {
      headers: {
        "x-api-minha-ia-fit-token": auth.token,
      },
    })
    .then((res) => {
      Swal.close();
      Swal.fire("Sucesso", "Pix Gerado com sucesso", "success");
      const data = res.data;
      pagamentoPix.payload = data.payload;
      pagamentoPix.qrcode = data.qrcode;
      pagamentoPix.correlationId = data.correlationId;
      pagamentoPix.status = "pending";
    })
    .catch((err) => {
      Swal.close();
      console.log(err);
      const res = err.response;
      Swal.fire("Erro", `${res.data.message}`, "error");
    });
}
</script>
