<template>
    <div class="max-w-4xl mx-auto my-10 p-6 bg-gray-50 rounded-2xl shadow-lg text-gray-800">
      <!-- LOADING -->
      <div v-if="loading" class="text-center text-green-600 font-semibold animate-pulse">
        Carregando dieta personalizada...
      </div>
  
      <!-- ERRO -->
      <div v-else-if="erro" class="text-center text-red-600 font-semibold">
        Ocorreu um erro ao carregar a dieta. Tente novamente mais tarde.
      </div>
  
      <!-- RESULTADO COM HTML DO BACKEND -->
      <div
        v-else
        v-html="resultado"
        class="leading-relaxed max-h-[85vh] overflow-y-auto pr-2 scroll-smooth space-y-4"
      />
    </div>
  </template>
  
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const resultado = ref('')
  const loading = ref(true)
  const erro = ref(false)
  
  onMounted(async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/monte/dieta/com-ia')
      console.log(response.data)
      resultado.value = response.data
    } catch (e) {
      erro.value = true
    } finally {
      loading.value = false
    }
  })
  </script>
  