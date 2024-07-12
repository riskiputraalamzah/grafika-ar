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
  <div class="container-loading bg-dark" v-if="hide">
    <img src="/img/unity-white.png" alt="" />
  </div>
</template>

<style scoped>
.container-loading {
  position: fixed;
  z-index: 999999;

  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}
.container-loading img {
  animation: 3s zoom linear;
  width: 100%;
}
@keyframes zoom {
  from {
    transform: scale(0.5);
  }

  to {
    transform: scale(1);
  }
}
</style>
