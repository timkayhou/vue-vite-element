<template>
  <BaseHeader />
  <img
    alt="Vue logo"
    style="height: 100px"
    class="logo"
    src="./assets/vue.svg"
  />
  <img
    alt="Vite logo"
    style="height: 100px"
    class="logo"
    src="./assets/vite.svg"
  />
  <img
    alt="Element logo"
    style="height: 100px"
    class="logo"
    src="./assets/element-plus.svg"
  />
  <img
    alt="Ant logo"
    style="height: 100px"
    class="logo"
    src="./assets/ant-design-vue.svg"
  />
  <HelloWorld msg="Hello Vue + Vite + Element Plus + Ant Design Vue" />
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import BaseHeader from './components/layouts/BaseHeader.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  width: 5%;
}
</style>
