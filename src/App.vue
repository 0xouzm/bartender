<template>
  <div id="app">
    <router-view />
    <a href="/" class="center">home</a>
  </div>
</template>

<script>
export default {
  name: 'App',
  // computed: {
  //   windowWidth() {
  //     return window.innerWidth + 'px'
  //   },

  // },
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
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.center {
  position: absolute;
  bottom: 0;
  font-size: 40px;
}
</style>
