<template>
  <div class="app-wrapper">
    <app-main />
  </div>
</template>

<script setup>
import { AppMain } from './components'
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/mixin.scss";
  @import "@/assets/styles/variables.module.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>