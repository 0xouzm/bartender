<template>
  <div class="container">
    <!--    <img src="../assets/logo.png" alt="">-->
    <h1 v-if="final">last choice</h1>
    <div>
      <p>{{ xxx }}</p>
      params.id: {{ $route.params.id }}

      <div v-if="final">to final</div>
      <div v-else>
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
      final: false,
    }
  },
  created() {
    console.log('created')
    this.check()
    this.changeAll()
  },
  updated() {
    console.log('updated')
    this.check()
    this.changeAll()
  },
  methods: {
    check() {
      let obj = this.getObj()
      let id = obj.id
      if (obj.final) {
        this.$router.push({
          path: `/wine/${id}`,
        })
      }
    },
    changeAll() {
      let obj = this.getObj()
      this.final = obj.final
      // menus
      this.xxx = obj.text
      this.children = obj.children
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
h1 {
  color: red;
}
.link {
  display: block;
}
.backBtn {
  position: absolute;
  bottom: 0;
}
</style>
