<template>
  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-gray-900 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-gray-900 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li v-for="(item, index) in menuItens" :key="index">
          <a
            @click="item.click"
            :href="item.href"
            :class="
              'group flex items-center p-2 text-white rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 ' +
              '' +
              item.cursor
            "
          >
            <span v-html="item.icon" />

            <span
              class="flex-1 ms-3 whitespace-nowrap group-hover:text-black transition"
            >
              {{ item.title }}
            </span>

            <span
              class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-200 bg-blue-600 rounded-full dark:bg-gray-700 dark:text-gray-300"
            >
              {{ item.badge }}
            </span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { UsuarioDados } from "@/utils/usuarioDados";
const { usuario, usuarioDados } = UsuarioDados();
import { computed, onMounted, ref } from "vue";
import { userAuth } from "@/stores/auth";
import Swal from "sweetalert2";

const auth = userAuth();

const credito = ref(null);

function deslogar() {
  auth.logout();
  Swal.fire({
    title: "Sucesso",
    text: "Deslogado com sucesso",
    icon: "success",
    confirmButtonText: "OK",
  }).then(() => {
    window.location.href = "/login";
  });
}

function formatarFitCoins(numero) {
  if (numero === null || numero === undefined || isNaN(numero)) {
    return "0";
  }

  if (numero < 1000) {
    return numero.toString();
  } else if (numero < 1000000) {
    return (
      (numero / 1000).toFixed(numero % 1000 === 0 ? 0 : 1).replace(".", ",") +
      "k"
    );
  } else if (numero < 1000000000) {
    return (
      (numero / 1000000)
        .toFixed(numero % 1000000 === 0 ? 0 : 1)
        .replace(".", ",") + "kk"
    );
  } else {
    return (
      (numero / 1000000000)
        .toFixed(numero % 1000000000 === 0 ? 0 : 1)
        .replace(".", ",") + "kkk"
    );
  }
}

const menuItens = computed(() => {
  return [
    {
      title: "Home",
      href: "#",
      badge: "",
      icon: `

    <svg 
    class="shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" 
    aria-hidden="true" 
    xmlns="http://www.w3.org/2000/svg" 
    fill="currentColor" 
    viewBox="0 0 24 24"
    >
     <path 
     fill-rule="evenodd" 
     d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" 
     clip-rule="evenodd"/>
   </svg>

`,
    },
    {
      title: "Perfil",
      href: "/usuario/perfil",
      badge: "",
      icon: `
   <svg 
      class="shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" 
      aria-hidden="true" 
      xmlns="http://www.w3.org/2000/svg"  
      fill="currentColor" 
      viewBox="0 0 24 24"
      >
      <path 
      fill-rule="evenodd" 
      d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" 
      clip-rule="evenodd"/>
   </svg>   
   `,
    },
    {
      title: "Treino Inteligente",
      href: "/ficha-treino",
      badge: "",
      icon: `
      <svg 
        class="shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="currentColor" 
        viewBox="0 0 24 24">
        <path 
        fill-rule="evenodd" 
        d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-3 8a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Zm2 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Z" clip-rule="evenodd"/>
      </svg>
    `,
    },
    {
      title: "Nutrição Inteligente",
      href: "#",
      badge: "",
      icon: `
    <svg 
      class="shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" 
      aria-hidden="true" 
      xmlns="http://www.w3.org/2000/svg"  
      fill="none" viewBox="0 0 24 24">
      <path 
        fill="currentColor" 
        fill-rule="evenodd" 
        d="M12.0212 2.37541c.2069.29981.2344.6884.0718 1.01435-.0835.16728-.1286.49646-.0866.81839.0345.26443.1525.51845.3564.72235.3798.37974.9446.46622 1.4086.25366.5022-.23 1.0957-.0094 1.3256.49272.0358.07797.0606.15815.0752.23883.0722.36885-.0676.76315-.391.99974-.067.04901-.1315.10409-.1929.16547-.6377.63769-.6377 1.67158 0 2.30927.6377.63771 1.6716.63771 2.3093 0 .1104-.11046.2008-.23148.2721-.35918.2649-.47416.8598-.65023 1.3401-.3966.4802.25363.6702.84422.428 1.33031-.1068.21428-.1459.45618-.1151.69208.033.2531.146.4962.3412.6915.265.265.622.3806.9709.3452.0473-.0048.095-.0062.1425-.0043.111.0047.5252-.0071.7534-.0158.2865-.0108.5639.1018.7617.3093.1978.2075.2971.4899.2726.7756-.1945 2.2647-1.1592 4.478-2.8921 6.2109-3.9053 3.9053-10.23692 3.9053-14.14216 0-3.90524-3.9052-3.90524-10.23686 0-14.1421C6.727 3.13084 8.88362 2.17056 11.0983 1.94837c.3624-.03636.716.12723.9229.42704ZM8.65695 8.41498c-.55229 0-1 .44771-1 1 0 .55228.44771 1.00002 1 1.00002h.01c.55228 0 1-.44774 1-1.00002 0-.55229-.44772-1-1-1h-.01ZM7.27106 12c-.55229 0-1 .4478-1 1 0 .5523.44771 1 1 1h.01c.55228 0 1-.4477 1-1 0-.5522-.44772-1-1-1h-.01Zm7.68744 1.9157c-.5523 0-1 .4477-1 1s.4477 1 1 1h.01c.5523 0 1-.4477 1-1s-.4477-1-1-1h-.01ZM11 16c-.5523 0-1.00004.4478-1.00004 1 0 .5523.44774 1 1.00004 1h.01c.5523 0 1-.4477 1-1 0-.5522-.4477-1-1-1H11Z" clip-rule="evenodd"/>
    </svg>

    `,
    },
    {
      title: "FitCoins",
      href: "/fit-coins/pacotes",
      badge: `${formatarFitCoins(credito.value)}`,
      icon: `
     <svg 
       class="shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white"
       aria-hidden="true" 
       xmlns="http://www.w3.org/2000/svg" 
       fill="currentColor" 
       viewBox="0 0 24 24">
      <path 
      fill-rule="evenodd" 
      d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Zm0 6h16v6H4v-6Z" 
      clip-rule="evenodd"/>
      <path 
      fill-rule="evenodd" 
      d="M5 14a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm5 0a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z" 
      clip-rule="evenodd"/>
    </svg>

    `,
    },
    {
      title: "Sair",
      cursor: "cursor-pointer",
      click: deslogar,
      badge: "",
      icon: `
         <svg
            class="shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
              />
        </svg>

   `,
    },
  ];
});

onMounted(async () => {
  await usuarioDados();
  credito.value = usuario.credito;
});
</script>
