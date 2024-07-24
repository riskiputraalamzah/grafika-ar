a
<template>
  <div>
    <div class="logo-indomie" v-if="$route.name == 'home'">
      <router-link to="/"
        ><img
          src="https://www.indomie.com/img/icon/logo-indomie.png"
          alt="logo indomie"
      /></router-link>
    </div>

    <div class="header">
      <div
        class="title"
        :class="[$route.name == 'home' ? 'flex-end' : 'flex-start']"
      >
        <a @click="$router.back()" class="back" v-if="$route.name != 'home'">
          <span></span><span></span><span></span>
        </a>

        <div class="text" v-text="$route.meta.title"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header .title {
  display: flex;

  align-items: center;
  height: 100%;
  padding: 0 12px;
}
.flex-start {
  justify-content: start;
}
.flex-end {
  justify-content: end;
}
.header .title .text {
  color: white;
  font-weight: bold;
  margin-left: 20px;
  font-size: calc(3vmin + 16px);
}

.back {
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: space-between;
  flex-direction: column;
}
.back span {
  height: 5px;
  display: block;
  background-color: white;
  border-radius: 5px;
}
.back span:nth-child(1) {
  width: 80%;
  transform: rotate(-45deg) translateX(-7px);
}
/* .back span:nth-child(2) {
  transform: translateX(px);
} */
.back span:nth-child(3) {
  width: 80%;
  transform: rotate(45deg) translateX(-7px);
}
</style>
