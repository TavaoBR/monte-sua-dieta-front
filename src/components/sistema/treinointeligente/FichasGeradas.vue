<script setup>
import { fichasGeradasDados } from '@/utils/fichasGeradas';
import { onMounted } from 'vue';
const  {lista, fichas} = fichasGeradasDados();

onMounted(async ()=>{
   await fichas();  
})
</script>

<template>
  <div class="bg-gray-900 relative overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm text-left rtl:text-right text-white dark:text-gray-400"
    >
      <caption
        class="p-5 text-lg font-semibold text-left rtl:text-right text-white dark:text-white dark:bg-gray-800"
      >
        Fichas Geradas
        <p class="mt-1 text-sm font-normal text-white dark:text-gray-400">
          Aviso: estas fichas são geradas com o auxílio de inteligência
          artificial. Para um acompanhamento mais eficaz e seguro, consulte um
          profissional da área.
        </p>
        <p class="mt-1 text-sm font-normal text-white dark:text-gray-400">
          <a href="/ficha-treino/criar" class="text-blue-400"
            >clique aqui para gerar novas fichas</a
          >
        </p>
      </caption>
      <thead
        class="text-xs bg-blue-900 text-white uppercase dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Objetivo</th>
          <th scope="col" class="px-6 py-3">Nível</th>
          <th scope="col" class="px-6 py-3">Local Treino</th>
          <th scope="col" class="px-6 py-3">Pontos usados</th>
          <th scope="col" class="px-6 py-3">Opção</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
          v-for="index in lista"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
          >
            {{ index.Objetivo }}
          </th>
          <td class="px-6 py-4">{{ index.Nivel }}</td>
          <td class="px-6 py-4">{{ index.LocalTreino }}</td>
          <td class="px-6 py-4">{{ index.PontosUsados }}</td>
          <td class="px-6 py-4">
            <a
              :href="`/ficha-treino/${index.id}`"
              class="font-medium bg-text-white dark:text-blue-500 hover:underline"
              >Mais Detalhes</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
