<template>
  <div>
    <h1>{{ wine._text }}</h1>
    <h1>{{ wine.text }}</h1>
    <p>PLEASE ENJOY YOUR COCKTAIL</p>
    <p>请享受你的鸡尾酒</p>
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
      let id = this.$route.query.id
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
