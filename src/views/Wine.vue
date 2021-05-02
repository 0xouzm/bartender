<template>
  <div>wine</div>
</template>

<script>
export default {
  name: 'Wine',
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
      console.log('final obj,', obj)
    },
  },
}
</script>

<style scoped></style>
