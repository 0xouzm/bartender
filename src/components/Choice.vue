<template>
  <div class="container">
    <!--    <img src="../assets/logo.png" alt="">-->
    <div>
      <p>{{ xxx }}</p>
      params.id: {{ $route.params.id }}

      <router-link
        :to="{ name: 'choice', params: { id: page.id } }"
        class="link"
        v-for="page in children"
        :key="page.id"
      >
        <Button>{{ page.value }}</Button>
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
      children: [],
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
      let obj = menus[id]
      this.xxx = obj.text
      this.children = obj.children
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
.link {
  display: block;
}
.backBtn {
  position: absolute;
  bottom: 0;
}
</style>
