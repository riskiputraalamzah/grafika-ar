<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const navigate = (name) => {
  router.push({ name });
};

const exit = () => {
  return window.confirm("Exit Page") ? window.close() : false;
};
</script>

<template>
  <div class="container">
    <div class="display-3 text-center font-judul lh-sm fw-bold py-4">
      Aplikasi Tutorial<br />Memasak Mie Indomie ter-enak<br />menggunakan
      Augmented Reality
    </div>

    <div class="menu mt-5 font-roboto">
      <button
        @click="navigate('start')"
        class="btn btn-dark mx-auto d-block border-light my-shadow"
      >
        Start
      </button>
      <button
        @click="navigate('tutorial')"
        class="btn btn-dark mx-auto d-block mt-5 border-light my-shadow"
      >
        Tutorial
      </button>
      <button
        @click="exit"
        class="btn btn-dark mx-auto d-block mt-5 border-light my-shadow"
      >
        Exit
      </button>
    </div>
  </div>
</template>
<style scoped>
.menu button {
  padding: 15px 30px;
  border-radius: 10px;
}
</style>
