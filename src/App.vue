<script setup>
import MainTailwind from './test/MainTailwind.vue'
import MainComponent from './components/MainComponent.vue'
import NavBar from './components/menu/NavBar.vue'
import FooTer from './components/footer/FooTer.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>  
    <main>
      <MainComponent />
    </main>
  <footer>
    <FooTer />
  </footer>
</template>


