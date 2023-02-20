<template>
  <div class="body">
    <div v-if="result.length" class="body-item">
      <div class="item">Тип:</div>
      <div class="item">ID:</div>
    </div>
    <div v-for="(item, index) in result" :key="index" class="body-item">
      <div class="item-type item">{{ item.type }}</div>
      <div class="item-id item">{{ item.id }}</div>
    </div>
  </div>
</template>
<script setup>
import { toRefs } from "vue";
import { useAmoApi } from "../stores/storeForAmo";

const { result } = toRefs(useAmoApi());
</script>
<style>
.body {
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  background: #e6f1fc56;
  border-radius: 10px;
}

.body-item {
  display: flex;

  padding: 10px;
  border-bottom: 1px solid #000;
}
.item {
  width: 50%;
  padding-left: 20%;
}
</style>
