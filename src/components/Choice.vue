<template>
  <div class="container">
    <!--    <img src="../assets/logo.png" alt="">-->
    <div>
      choice: {{ $route.params.id }}
      <Button @click="$router.back()">back</Button>
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
</style>
