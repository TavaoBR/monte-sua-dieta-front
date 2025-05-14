<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { RouterView } from "vue-router";
import NavBar from "@/components/menu/NavBar.vue";
import FooTer from "@/components/footer/FooTer.vue";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />

    <!-- Main content area, flex-grow empurra o footer pra baixo -->
    <main class="flex-grow p-5 bg-white">
      <RouterView />
    </main>

    <FooTer />
  </div>
</template>
