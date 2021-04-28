<template>
  <div id="app">
    <div class="top">top</div>

    <div class="container" :style="{ height: windowWidth }">
      <router-view />
    </div>
    <div class="bottom">bottom</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    windowWidth() {
      return window.innerWidth + 'px'
    },
  },
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
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.container {
  background-color: gray;
}
</style>
