<script setup>
import { ref } from "vue";
const hide = ref(true);

const hideLoading = () => {
  setTimeout(() => {
    hide.value = !hide.value;
  }, 3000);
};

hideLoading();
</script>
<template>
  <div class="container-loading" v-if="hide">
    <img src="/img/unity.png" alt="" />
  </div>
</template>

<style scoped>
.container-loading {
  position: fixed;
  z-index: 999999;
  color: white;
  background-color: white;
  /* background-color: #24201f; */
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-loading img {
  animation: 3s zoom linear;
}
@keyframes zoom {
  0% {
    transform: scale(0.5);
    opacity: 1;
  }

  100% {
    transform: scale(1);
  }
}
</style>
