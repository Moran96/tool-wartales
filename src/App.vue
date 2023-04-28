<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="app-nav">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
  <div class="app-container">
    <RouterView />
  </div>
</template>

<style scoped>
.app-nav {
  width: 120px;
  height: 100%;
  box-shadow: 0 0 5px 2px #CCCCCC;
}
.app-container {
  overflow: hidden;
  height: 100%;
  flex: auto;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  /*display: inline-block;*/
  display: block;
  padding: 1rem 0;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
