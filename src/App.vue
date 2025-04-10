<script setup>
import { onMounted, computed  } from 'vue'
import { initFlowbite } from 'flowbite'
import { useRoute } from 'vue-router';
import DashBoard from './layouts/DashBoard.vue'
import LandingPage from './layouts/LandingPage.vue'
import { userAuth } from "@/stores/auth.js";

const auth = userAuth();
const route = useRoute();

const layout = computed(()=> {
  return auth.isAuthenticated && route.meta.auth ? DashBoard : LandingPage;
})

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>
<component :is="layout" />
</template>


