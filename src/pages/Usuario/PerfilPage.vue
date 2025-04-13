<template>
  <div class="rounded-lg mt-14" v-if="!isLoading">
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
              href="#"
              class="ms-1 text-sm font-medium text-white hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >
              Perfil</a
            >
          </div>
        </li>

        <li aria-current="page">
          <div class="flex items-center">
            <svg
              class="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400"
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
            <span
              class="ms-1 text-sm font-bold text-blue-400 md:ms-2 dark:text-gray-400"
              >{{ usuario.nomeUsuario }}</span
            >
          </div>
        </li>
      </ol>
    </nav>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      <!-- Card 1 -->
      <div
        class="rounded-xl bg-gray-900 text-white shadow-md w-full sm:w-auto sm:h-auto"
      >
        <!-- Título -->
        <p class="p-4 text-lg font-semibold flex items-center gap-1">
          Informações do usuario
        </p>

        <!-- Container principal -->
        <div
          class="px-4 pb-4 flex flex-col items-center text-center sm:text-left sm:flex-row sm:items-center sm:gap-4"
        >
          <!-- Imagem do usuário -->
          <img
            class="w-24 h-24 rounded-lg object-cover mb-3 sm:mb-0"
            :src="`data:image/;base64,${usuario.avatar}`"
            alt="Profile"
          />

          <!-- Infos -->
          <div class="font-medium">
            <div class="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <h5 class="text-xl font-bold">{{ usuario.nomeUsuario }}</h5>
            </div>
            <h6 class="text-gray-400 text-sm">{{ usuario.email }}</h6>
          </div>
        </div>

        <hr />

        <br />

        <!-- Botão editar -->
        <div class="px-4 pb-4">
          <button
            type="button"
            class="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center items-center"
          >
            <svg
              class="w-5 h-5 text-white mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M5 8a4 4 0 1 1 7.796 1.263l-2.533 2.534A4 4 0 0 1 5 8Zm4.06 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h2.172a2.999 2.999 0 0 1-.114-1.588l.674-3.372a3 3 0 0 1 .82-1.533L9.06 13Zm9.032-5a2.907 2.907 0 0 0-2.056.852L9.967 14.92a1 1 0 0 0-.273.51l-.675 3.373a1 1 0 0 0 1.177 1.177l3.372-.675a1 1 0 0 0 .511-.273l6.07-6.07a2.91 2.91 0 0 0-.944-4.742A2.907 2.907 0 0 0 18.092 8Z"
                clip-rule="evenodd"
              />
            </svg>
            Editar
          </button>
        </div>
      </div>

      <!-- Card 2 -->
      <div
        class="h-auto rounded-xl bg-gray-900 text-white shadow-md w-full sm:w-auto sm:h-auto"
      >
        <p class="p-4 text-lg font-semibold flex items-center gap-1">
          Informações pessoais
        </p>

        <div
          class="px-4 pb-4 flex flex-col sm:flex-row sm:gap-8"
          v-if="pessoa.encontrado === true"
        >
          <!-- Coluna 1 -->
          <div class="font-medium flex flex-col gap-4">
            <div class="flex flex-col">
              <h5 class="text-lg font-bold">Nome Completo</h5>
              <h6 class="text-gray-400 text-sm">
                {{ pessoa.nome + " " + pessoa.sobrenome }} ({{ pessoa.idade }}
                anos)
              </h6>
              <h5 class="text-lg font-bold">Sexo</h5>
              <h6 class="text-gray-400 text-sm">{{ sexo(pessoa.sexo) }}</h6>
            </div>
          </div>

          <!-- Coluna 2 (adicione conteúdo se necessário) -->

          <div class="font-medium flex flex-col gap-4">
            <div class="flex flex-col">
              <h5 class="text-lg font-bold">Altura</h5>
              <h6 class="text-gray-400 text-sm">{{ pessoa.altura }} Metros</h6>
              <h5 class="text-lg font-bold">Peso</h5>
              <h6 class="text-gray-400 text-sm">{{ pessoa.peso }} Kg</h6>
            </div>
          </div>
        </div>

        <hr v-if="pessoa.encontrado === true" />

        <br v-if="pessoa.encontrado === true" />

        <!-- Botão editar -->
        <div class="px-4 pb-4" v-if="pessoa.encontrado === true">
          <button
            type="button"
            class="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center items-center"
          >
            <svg
              class="w-5 h-5 text-white mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M5 8a4 4 0 1 1 7.796 1.263l-2.533 2.534A4 4 0 0 1 5 8Zm4.06 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h2.172a2.999 2.999 0 0 1-.114-1.588l.674-3.372a3 3 0 0 1 .82-1.533L9.06 13Zm9.032-5a2.907 2.907 0 0 0-2.056.852L9.967 14.92a1 1 0 0 0-.273.51l-.675 3.373a1 1 0 0 0 1.177 1.177l3.372-.675a1 1 0 0 0 .511-.273l6.07-6.07a2.91 2.91 0 0 0-.944-4.742A2.907 2.907 0 0 0 18.092 8Z"
                clip-rule="evenodd"
              />
            </svg>
            Editar
          </button>
        </div>

        <div
          class="flex items-center justify-center px-4 pb-4 text-center sm:flex-row sm:items-center sm:gap-4"
          v-if="pessoa.encontrado === false"
        >
          <div class="font-medium flex flex-col gap-4">
            <div class="flex flex-col">
              <p class="text-white whitespace-pre-line dark:text-gray-400">
                Você não adicinou suas informações
              </p>

              <p class="text-white whitespace-pre-line dark:text-gray-400">
                Clique no botão abaixo para adicionar as informações
              </p>

              <br />

              <button
                type="button"
                @click="irAdcionarInformacoesPessoais"
                class="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center items-center"
              >
                <svg
                  class="w-5 h-5 text-white mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 8a4 4 0 1 1 7.796 1.263l-2.533 2.534A4 4 0 0 1 5 8Zm4.06 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h2.172a2.999 2.999 0 0 1-.114-1.588l.674-3.372a3 3 0 0 1 .82-1.533L9.06 13Zm9.032-5a2.907 2.907 0 0 0-2.056.852L9.967 14.92a1 1 0 0 0-.273.51l-.675 3.373a1 1 0 0 0 1.177 1.177l3.372-.675a1 1 0 0 0 .511-.273l6.07-6.07a2.91 2.91 0 0 0-.944-4.742A2.907 2.907 0 0 0 18.092 8Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Adicionar Informações
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      <div
        class="rounded-xl bg-gray-900 text-white shadow-md w-full sm:w-auto sm:h-auto"
      >
        <p class="p-4 text-lg font-semibold flex items-center gap-1">
          Estilo Alimentar
        </p>

        <div
          class="flex items-center justify-center px-4 pb-4 text-center sm:flex-row sm:items-center sm:gap-4"
          v-if="padraoAlimentar.encontrado === false"
        >
          <div class="font-medium flex flex-col gap-4">
            <div class="flex flex-col">
              <p class="text-white whitespace-pre-line dark:text-gray-400">
                Você não adicinou seu estilo alimentar
              </p>

              <p class="text-white whitespace-pre-line dark:text-gray-400">
                Clique no botão abaixo para adicionar seu estilo alimentar
              </p>

              <br />

              <button
                type="button"
                @click="irAdicionarPadraoAlimentar"
                class="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center items-center"
              >
                <svg
                  class="w-5 h-5 text-white mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 8a4 4 0 1 1 7.796 1.263l-2.533 2.534A4 4 0 0 1 5 8Zm4.06 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h2.172a2.999 2.999 0 0 1-.114-1.588l.674-3.372a3 3 0 0 1 .82-1.533L9.06 13Zm9.032-5a2.907 2.907 0 0 0-2.056.852L9.967 14.92a1 1 0 0 0-.273.51l-.675 3.373a1 1 0 0 0 1.177 1.177l3.372-.675a1 1 0 0 0 .511-.273l6.07-6.07a2.91 2.91 0 0 0-.944-4.742A2.907 2.907 0 0 0 18.092 8Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Adicionar estilo
              </button>
            </div>
          </div>
        </div>

        <div
          class="px-4 pb-4 flex flex-col sm:flex-row sm:gap-8"
          v-if="padraoAlimentar.encontrado === true"
        ></div>
      </div>

      <div
        class="h-auto rounded-xl bg-gray-900 text-white shadow-md w-full sm:w-auto sm:h-auto"
      >
        <p class="p-4 text-lg font-semibold flex items-center gap-1">
          Hábitos Alimentares
        </p>
      </div>
    </div>

    <!-- Card grande -->
    <div
      class="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800"
    ></div>

    <!-- Grid cards pequenos -->
    <div class="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-4">
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
    </div>

    <!-- Outro card grande -->
    <div
      class="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800"
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

    <!-- Última grid -->
    <div class="grid grid-cols-2 sm:grid-cols-2 gap-4">
      <div
        v-for="i in 4"
        :key="'b' + i"
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
    </div>
  </div>

  <div class="text-center mt-52" v-else>
    <button
      disabled
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-8 py-4 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
    >
      <svg
        aria-hidden="true"
        role="status"
        class="inline w-6 h-6 me-3 text-white animate-spin"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="#E5E7EB"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentColor"
        />
      </svg>
      Carregando...
    </button>
  </div>
</template>

<script setup>
import { UsuarioDados } from "@/utils/usuarioDados";
import { onMounted, ref } from "vue";

const { usuario, usuarioDados } = UsuarioDados();
const { pessoa, pessoaDados } = UsuarioDados();
const { padraoAlimentar, padraoAlimentarDados } = UsuarioDados();

const isLoading = ref(true);

function sexo(sexo) {
  switch (sexo) {
    case "M":
      sexo = "Masculino";
      break;

    case "F":
      sexo = "Feminino";
      break;
  }

  return sexo;
}

function irAdcionarInformacoesPessoais() {
  window.location.href = "/usuario/adicionar/informacoes/pessoais";
}

function irAdicionarPadraoAlimentar() {
  window.location.href = "/usuario/adicionar/estilo/alimentar";
}

onMounted(async () => {
  await usuarioDados();
  await pessoaDados();
  await padraoAlimentarDados();
  isLoading.value = false;
});
</script>
