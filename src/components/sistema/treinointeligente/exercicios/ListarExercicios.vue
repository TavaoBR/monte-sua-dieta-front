<script setup>
import { exerciciosDados } from '@/utils/exerciciosDados';
import { onMounted } from 'vue';
import { useRoute } from "vue-router";
const route = useRoute();
const id = route.params.id;
const {listaExercicios, nomeMuscular, exercicios} = exerciciosDados();

onMounted(async () => {
    await exercicios(id);
})


</script>
<template>

    <h2 class="mb-4 text-3xl font-extrabold dark:text-white">
      Exercícios para:
      <span class="text-blue-600 dark:text-blue-500">{{ nomeMuscular.nome }}</span>
    </h2>

    <a
      href="/treino-inteligente/listar-musculos-escolhidos"
      class="mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >voltar</a
    >

   <div class="mt-6 flex flex-wrap justify-start gap-6">
    <div v-for="index in listaExercicios" class="w-full max-w-sm rounded-lg shadow-md p-6 bg-gray-900">
        <div class="text-white text-xl mb-2">Exercicio</div>
        <h2 class="text-white text-lg font-bold mb-2">{{ index.Exercicio }}</h2>
        <ul class="list-disc list-inside text-sm mb-2 text-white">
            <li>Musculo Ativado: {{ index.musculoAtivado }}</li>
            <li>Series: {{ index.Series }}</li>
            <li>Repetições: {{ index.Repeticoes }}</li>
            <li>Equipamento: {{ index.Equipamento }}</li>
            <li>Dificuldade: {{ index.Dificuldade }}</li>
        </ul>
        <p class="text-white"><strong>Como Executar:</strong></p>
        <ul class="list-disc list-inside text-sm mb-2 text-white">
            <li>{{ index.ComoExecutar }}</li>
        </ul>
    </div>
   </div> 


</template>