<template>
  <div id="app">
    <div class="top" :style="{ height: halfHeight }">
      <van-image
        :src="require('../assets/images/bg.jpg')"
        :style="{ height: halfHeight }"
        fit="cover"
      />
    </div>

    <div class="container" :style="{ height: windowWidth }">
      <router-view />
    </div>
    <div class="top" :style="{ height: halfHeight }">
      <van-image
        :src="require('../assets/images/bg.jpg')"
        :style="{ height: halfHeight }"
        fit="cover"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Container',
  computed: {
    windowWidth() {
      return window.innerWidth + 'px'
    },
    halfHeight() {
      console.log(window.innerHeight, window.innerWidth)
      let half = (window.innerHeight - window.innerWidth) / 2 + 'px'
      console.log('half:' + half)
      return half
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  background-color: gray;
  position: relative;
}
.top {
  //background-image: url('../assets/images/bg.jpg');
  //background-size: cover;
}
</style>
