<template>
  <div class="mt-6 flex flex-wrap justify-start gap-6">
    <div
      class="w-full max-w-sm rounded-lg shadow-md p-6 bg-gray-900"
      v-for="dia in listarDadosFicha"
      :key="dia.id"
    >
      <div class="text-white text-xl mb-2">📋</div>
      <h2 class="text-white text-lg font-bold mb-2">
        {{ dia.DiaSemana }}
      </h2>
      <ul class="list-disc list-inside text-sm mb-2 text-white">
        <li>Grupo Muscular: {{ dia.GrupoMuscular }}</li>
        <li>Cárdio: {{ dia.Cardio }}</li>
        <li>Observações: {{ dia.Observacoes }}</li>
      </ul>
      <div v-if="dia.ArrayExcercicios.length">
        <p class="mb-2 text-white"><strong>Exercícios:</strong></p>
        <ul
          v-for="(exercicio, index) in dia.ArrayExcercicios"
          :key="index"
          class="list-disc list-inside text-sm  text-white"
        >
          <li> {{ exercicio.nome }}: {{ exercicio.series }}x de {{ exercicio.repeticoes }} rep </li>
          <li>Descanso: {{ exercicio.descanso }} segundos</li>
          <li>Musculo(s) Ativado(s): {{ exercicio.musculoAtivado }}</li>
          <li>Equipamento Necessario: {{ exercicio.equipamentoNecessario }}</li>
          <hr/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { fichasGeradasDados } from "@/utils/fichasGeradas";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const token = route.params.token;
const { listarDadosFicha, fichaExercicios } = fichasGeradasDados();

onMounted(async () => {
  await fichaExercicios(token);
});
</script>
