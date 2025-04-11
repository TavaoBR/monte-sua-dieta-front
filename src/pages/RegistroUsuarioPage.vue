<template>
  <section class="dark:bg-gray-900 p-6">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
    >
      <a
        href="/"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          class="w-8 h-8 mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        Sua IA Fitness
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Crie sua conta
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="criar">
            <div>
              <label
                for="usuario"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Nome de usuario</label
              >
              <input
                v-model="registro.usuario"
                type="text"
                name="usuario"
                id="usuario"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
              />
            </div>

            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Seu e-mail</label
              >
              <input
                v-model="registro.email"
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
              />
            </div>

            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Senha</label
              >
              <input
                v-model="registro.senha"
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="user_avatar"
                >Avatar</label
              >
              <input
                @change="uploadArquivo"
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
                accept="image/*"
              />
            </div>

            <!-- Exibindo a imagem carregada -->
            <div v-if="registro.avatar">
              <img
                :src="'data:image/jpeg;base64,' + registro.avatar"
                class="w-16 h-16 rounded-full mt-4"
                alt="Avatar"
              />
            </div>

            <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Criar
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Já possui conta?
              <a
                href="/login"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Login aqui</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import https from "@/api/https.js";
import { reactive } from "vue";
import Swal from "sweetalert2";

const registro = reactive({
  email: "",
  usuario: "",
  senha: "",
  confirmeSenha: "",
  avatar: "",
});

function verificarCampos() {
  if (
    registro.usuario === '' &&
    registro.email === '' &&
    registro.senha === '' &&
    registro.avatar === ''
  ) {
    Swal.fire("Atenção", "Preencha todos os campos", "warning");
    return false;
  }

  if (registro.usuario === '') {
    Swal.fire("Atenção", "Digite um nome de usuario por favor", "warning");
    return false;
  }

  if (registro.email === '') {
    Swal.fire("Atenção", "Digite seu melhor e-mail por favor", "warning");
    return false;
  }

  if (registro.senha === '') {
    Swal.fire("Atenção", "Digite uma senha por favor", "warning");
    return false;
  }

  if (registro.avatar === '') {
    Swal.fire(
      "Atenção",
      "Escolhe uma imagem para ser seu avatar por favor",
      "warning"
    );
    return false;
  }

  return true;
}

const uploadArquivo = (event) => {
  const arquivo = event.target.files[0];

  if (!arquivo) return;

  if (!arquivo.type.startsWith("image/")) {
    return;
  }

  const lerArquivo = new FileReader();
  lerArquivo.readAsDataURL(arquivo);
  lerArquivo.onload = () => {
    registro.avatar = lerArquivo.result.split(",")[1];
  };
};

async function criar() {
    if(!verificarCampos()) return;

  Swal.fire({
    title: "Processando...",
    text: "Aguarde um momento",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  await https
    .post("/externo/usuario/cadastro", registro)
    .then((res) => {
      Swal.close();

      Swal.fire({
        title: "Sucesso",
        text: res.data.message,
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        window.location.href = "/login";
      });
    })
    .catch((err) => {
      Swal.close();
      const response = err.response;

      Swal.fire("Erro", `${response.data.message}`, "error");
    });
}
</script>
