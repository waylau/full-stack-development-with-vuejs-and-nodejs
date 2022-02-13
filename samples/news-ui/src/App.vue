<template>
  <div id="content">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {}
</script>

<style>
a {
  text-decoration: none;
}

#app {
  margin: 10px;
}
</style>
