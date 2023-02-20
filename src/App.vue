<script setup>
import Interactionblock from "@/components/InteractionBlock.vue";
import ResultBody from "./components/ResultBody.vue";
</script>

<template>
  <header class="header"></header>
  <div class="container">
    <Interactionblock />
    <ResultBody />
  </div>
  <footer class="footer"></footer>
</template>

<style>
.container {
  font-family: Arial, Helvetica, sans-serif;
  max-width: 1024px;
  margin: 50px auto;
  padding: 0 20px 50px;
}

.header {
  height: 50px;
  background: #cad5d7;
}
</style>
