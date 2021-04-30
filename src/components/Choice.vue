<template>
  <div class="container">
    <!--    <img src="../assets/logo.png" alt="">-->
    <div>
      choice: {{ $route.params.id }}
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
  created() {
    console.log('menus:', this.COMMON.menus)
    console.log('id:', this.$route.params.id)
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
