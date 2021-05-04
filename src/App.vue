<template>
  <div id="app">
    <router-view />
    <a href="/" class="home">home</a>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
html,
body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.home {
  position: absolute;
  bottom: 0;
  font-size: 30px;
}
</style>
