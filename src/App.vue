<script setup>
import UnityImage from "@/components/MadeWithUnity.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useRouter } from "vue-router";
import { provide, ref } from "vue";

const router = useRouter();
const srcAr = ref(null);

const dispatchAr = (src) => {
  srcAr.value = src;
  router.push("/ar");
};

provide("ar", { srcAr, dispatchAr });
</script>

<template>
  <div>
    <UnityImage />
    <Header />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <teleport to="#parent-script-view">
      <div id="script-view"></div>
    </teleport>

    <Footer v-if="$route.name != 'ar'" />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
