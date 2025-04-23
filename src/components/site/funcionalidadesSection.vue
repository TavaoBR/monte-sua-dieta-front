<template>
  <section class="dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="mb-8 lg:mb-16">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Funcionalidades
        </h2>
        <p class="text-gray-900 sm:text-xl">
          Tudo o que você precisa para treinar e evoluir está aqui — com o Minha
          IA Fitness, a IA trabalha por você.
        </p>
      </div>
      <div
        class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
      >
        <div v-for="func in funItens">
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-600 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <span v-html="func.icon"></span>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            {{ func.title }}
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            {{ func.discricao }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const funItens = [
  {
    title: "Treinos personalizados com IA",
    discricao:
      "A plataforma analisa o perfil do usuário — como idade, nível de condicionamento, objetivos e limitações — e gera automaticamente um plano de treino eficaz, adaptado à rotina e metas da pessoa. Tudo isso com atualizações contínuas conforme o progresso.",
    icon: `
        <svg 
          class="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-primary-300" 
          aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
          fill="currentColor" 
          viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-3 8a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Zm2 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Z" clip-rule="evenodd"/>
        </svg>

        `,
  },

  {
    title: "Dicas nutricionais automatizadas",
    discricao: "Com base nos objetivos (emagrecimento, ganho de massa, definição etc.), a IA sugere orientações nutricionais práticas, sem precisar de um nutricionista presencial. As dicas são ajustadas conforme o estilo de vida do usuário.",
    icon: `
         <svg class="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-primary-300"  
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path 
             stroke="currentColor" 
             stroke-linecap="round" 
             stroke-linejoin="round" 
             stroke-width="2" 
             d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
            />
         </svg>

        `,
  },

  {
    title: "Perfis e metas personalizáveis",
    discricao: "O usuário pode criar diferentes metas (ex: emagrecer 5kg, correr 10km, hipertrofia) e a IA adapta todos os planos automaticamente.",
    icon: `
    <svg 
     class="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-primary-300"
     xmlns="http://www.w3.org/2000/svg" 
     viewBox="0 0 512 512">
     <path 
      fill="#fbfaff"   
      d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
    </svg>
    `
  }
];
</script>
