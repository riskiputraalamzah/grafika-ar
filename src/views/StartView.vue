<script setup>
import { inject } from "vue";

const { srcAr } = inject("ar");
</script>
<template>
  <iframe
    :src="srcAr"
    frameborder="0"
    scrolling="yes"
    seamless="seamless"
    style="display: block; width: 100%; height: 100vh"
    allow="camera;gyroscope;accelerometer;magnetometer;xr-spatial-tracking;microphone;"
  ></iframe>
</template>
