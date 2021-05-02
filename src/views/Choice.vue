<template>
  <div class="container">
    <h1 v-if="final">last choice</h1>
    <div>
      <p>{{ _text }}</p>
      <p>{{ text }}</p>
      <div class="link" v-for="page in children" :key="page.id">
        <div>{{ page._value }}</div>
        <div>{{ page.value }}</div>
        <router-link :to="{ name: page.final ? 'wine' : 'choice', params: { id: page.id } }">
          <Button>{{ page.id }}</Button>
        </router-link>
      </div>
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
      obj: {},
      children: [],
      final: false,
    }
  },
  watch: {
    $route(to, from) {
      console.log('watch..')
      this.changeAll()
    },
  },
  created() {
    console.log('created')
    this.changeAll()
  },
  methods: {
    changeAll() {
      let obj = this.getObj()
      this.final = obj.final
      // menus
      this.children = obj.children
      this.text = obj.text
      this._text = obj._text
    },
    getObj() {
      let menus = this.common.menus
      let id = this.$route.params.id
      // console.log('menus:', menus)
      console.log('id:', id)
      console.log('params', menus[id])
      return menus[id]
    },
  },
}
</script>

<style scoped>
.container {
  height: 100%;
}
.backBtn {
  position: absolute;
  bottom: 0;
}
</style>
