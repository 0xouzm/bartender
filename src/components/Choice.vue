<template>
  <div class="container">
    <!--    <img src="../assets/logo.png" alt="">-->
    <div>
      <p>{{ xxx }}</p>
      params.id: {{ $route.params.id }}
      <router-link :to="{ name: 'choice', params: { id: 1 } }" class="link">
        <Button>1</Button>
      </router-link>
      <Button @click="$router.back()" class="backBtn">back</Button>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: 'Choice',
  components: {
    Button,
  },
  data() {
    return {
      xxx: 'xxx',
    }
  },
  created() {
    this.changeAll()
  },
  updated() {
    this.changeAll()
  },
  methods: {
    changeAll() {
      let menus = this.common.menus
      let id = this.$route.params.id
      console.log('menus:', menus)
      console.log('id:', id)
      console.log('params', menus[id])
      // try {
      //   this.xxx = this.common.menus.id.text
      // } catch (e) {
      //   console.log(e)
      // }
    },
  },
}
</script>

<style scoped>
.container {
  height: 100%;
}

/*img {*/
/*  width: 300px;*/
/*  height: 300px;*/
/*}*/
.backBtn {
  position: absolute;
  bottom: 0;
}
</style>
