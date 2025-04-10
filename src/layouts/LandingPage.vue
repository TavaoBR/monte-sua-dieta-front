<script setup>
import {RouterView} from 'vue-router';
import NavBar from '@/components/menu/NavBar.vue';
import FooTer from '@/components/footer/FooTer.vue';
</script>

<template>

<NavBar />

<main class="p-5 bg-gray-100">
  <RouterView />
</main>  

<FooTer />
</template>