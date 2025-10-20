<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <NavBar />
    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style>
/* pequenas personalizaciones */
</style>
