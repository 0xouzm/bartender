<template>
  <div>
    <h1>{{ wine._text }}</h1>
    <h1>{{ wine.text }}</h1>
    <div>price: {{ wine.price }}</div>
    <div>vol: {{ wine.vol }}</div>
    <div class="text-wrapper">{{ wine._ingredient }}</div>
    <div class="text-wrapper">{{ wine.ingredient }}</div>
    <Button @click="$router.back()" class="backBtn">back</Button>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: 'Wine',
  components: {
    Button,
  },
  data() {
    return {
      wine: {},
    }
  },
  created() {
    this.changeAll()
  },
  methods: {
    changeAll() {
      let id = this.$route.params.id
      this.wine = this.common.wines[id]
      console.log('id:', id)
      console.log('wine:', this.wine)
    },
  },
}
</script>

<style scoped>
.text-wrapper {
  white-space: pre-wrap;
}
</style>
