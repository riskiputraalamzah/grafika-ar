<template>
  <nav class="navbar bg-dark">
    <div class="container-fluid justify-content-start">
      <a @click="$router.back()" class="navbar-brand">
        <i class="bi bi-arrow-left-short display-3 fw-bold text-light"></i>
      </a>
      <div class="font-roboto fs-3">
        <slot></slot>
      </div>
    </div>
  </nav>
</template>
