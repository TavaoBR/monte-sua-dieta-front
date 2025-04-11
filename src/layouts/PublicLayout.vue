<script setup>
import { onMounted} from 'vue'
import { initFlowbite } from 'flowbite'
import {RouterView} from 'vue-router';
import NavBar from '@/components/menu/NavBar.vue';
import FooTer from '@/components/footer/FooTer.vue';

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})


</script>

<template>

<NavBar />

<main class="p-5">
  <RouterView />
</main>  

<FooTer />
</template>