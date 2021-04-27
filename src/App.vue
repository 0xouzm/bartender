<template>
  <div class="app">
    <div class="container"> This container is <strong>centered</strong> on desktop and larger viewports.
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    windowWidth () {
      return window.innerWidth
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
