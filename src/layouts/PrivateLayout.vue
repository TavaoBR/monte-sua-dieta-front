<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { RouterView } from "vue-router";
import NavBar from "@/components/menu/private/NavBar.vue";
import SiderBar from "@/components/menu/private/SiderBar.vue";

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <NavBar />

  <SiderBar />

  <div class="p-5 sm:ml-64">
    <RouterView />
  </div>
</template>
