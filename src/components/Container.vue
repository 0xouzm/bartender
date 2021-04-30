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
  name: 'Container',
  computed: {
    windowWidth() {
      return window.innerWidth + 'px'
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  background-color: gray;
}
</style>
