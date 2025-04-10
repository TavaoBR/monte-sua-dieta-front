<script setup>
import {RouterView} from 'vue-router';
import NavBar from '@/components/menu/NavBar.vue';
import FooTer from '@/components/footer/FooTer.vue';
</script>

<template>

<NavBar />

<main class="p-5 bg-[#FBFBFB]">
  <RouterView />
</main>  

<FooTer />
</template>