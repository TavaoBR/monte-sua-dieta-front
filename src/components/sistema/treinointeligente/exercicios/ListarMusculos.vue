<script setup>
import { exerciciosDados } from '@/utils/exerciciosDados';
import { onMounted } from 'vue';
const { listaMusculos, musculos } = exerciciosDados();

onMounted(async () => {
    await musculos();
})

</script>

<template>

<div class="mt-6 overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right">
        <thead class="text-xs text-white uppercase bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Musculo
                </th>
                <th scope="col" class="px-6 py-3">
                    Objetivo
                </th>
                <th scope="col" class="px-6 py-3">
                    Nível
                </th>
                <th scope="col" class="px-6 py-3">
                    FitCoins usado
                </th>
                <th scope="col" class="px-6 py-3">
                    Ações
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="index in listaMusculos" class="bg-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    {{ index.GrupoMuscular }}
                </th>
                <td class="px-6 py-4 text-white">
                    {{ index.Objetivo }}
                </td>
                <td class="px-6 py-4 text-white">
                    {{ index.Nivel }}
                </td>
                <td class="px-6 py-4 text-white">
                    {{ index.qtdFitCoins }}
                </td>
                <td class="px-6 py-4">
                    <a :href="`/treino-inteligente/listar-exercicios/${index.id}`" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" title="Mais Detalhes"><i class="fa-solid fa-clipboard-list text-white"></i></a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

</template>

