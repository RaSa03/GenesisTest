<template>
  <div class="interaction">
    <div class="dropdown">
      <button @click="isActive = !isActive" class="btn-dropdown" type="button">
        <span>{{ entity }}</span>
        <img
          src="https://img.icons8.com/external-those-icons-fill-those-icons/24/null/external-down-arrows-those-icons-fill-those-icons-1.png"
        />
      </button>
      <transition>
        <ul v-if="isActive" class="dropdown-menu">
          <li @click="selectEntity('Не выбрано')" class="dropdown-item">
            Не выбрано
          </li>
          <li @click="selectEntity('Сделка')" class="dropdown-item">Сделка</li>
          <li @click="selectEntity('Контакт')" class="dropdown-item">
            Контакт
          </li>
          <li @click="selectEntity('Компания')" class="dropdown-item">
            Компания
          </li>
        </ul>
      </transition>
    </div>
    <button
      @click="postIt(entity)"
      :disabled="entity === 'Не выбрано'"
      :class="{ active: entity !== 'Не выбрано' }"
      class="btn-create"
    >
      <span v-if="!loader">Создать</span>
      <spinner v-else></spinner>
    </button>
  </div>
  <div></div>
</template>
<script setup>
import { ref, toRefs } from "vue";
import { useAmoApi } from "../stores/storeForAmo";
import Spinner from "./Spinner.vue";
const { loader } = toRefs(useAmoApi());
const isActive = ref(false);
const entity = ref("Не выбрано");
const selectEntity = (e) => {
  entity.value = e;
  isActive.value = false;
};

const postIt = useAmoApi().postIt;
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-out;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.interaction {
  min-height: 200px;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: start;
}
.dropdown {
  min-width: 250px;
}
.btn-dropdown {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background: #f9f9f9;
  font-size: 1.4rem;
  border: 1px solid #7d7d7d;
  border-radius: 5px;
  transition: all;
  transition-duration: 0.6s;
}
.btn-dropdown:hover {
  box-shadow: 0px 1px 3px 0px #919191;
}
.dropdown-menu {
  overflow: hidden;

  margin-top: 10px;
  background: #f9f9f9;
  border: 1px solid #7d7d7d;
  border-radius: 5px;
}
.dropdown-item {
  padding: 5px 20px;
}
.dropdown-item:hover {
  background: #ededed;
}
.btn-create {
  font-size: 1.4rem;
  line-height: 2;
  padding: 0 10px;
  background: #f9f9f9;
  border: 1px solid #7d7d7d;
  border-radius: 5px;
  transition: all;
  transition-duration: 0.6s;
}
.btn-create:hover {
  box-shadow: 0px 1px 3px 0px #919191;
}
.btn-create:disabled {
  color: black;
  box-shadow: none;
}
.active {
  color: white;
  background: #5ca0ff;
}
</style>
