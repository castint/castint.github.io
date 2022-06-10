<script setup lang="ts">


</script>

<template>

  <div>
    <img alt="Vue logo" src="@/assets/logo.png" />
  </div>

  <div>
    <router-link to="/home">Home</router-link>
    <router-link to="/about" style="margin: 0 1rem;">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>

  <router-view></router-view>

</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
