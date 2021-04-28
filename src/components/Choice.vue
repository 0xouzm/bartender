<template>
  <div class="container">
    <!--    <img src="../assets/logo.png" alt="">-->
    <div>
      choice: {{ $route.params.id }}
      <Button @click="$router.back()">back</Button>
    </div>
    <Loading type="spinner" />
  </div>
</template>

<script>
import { Button, Loading } from 'vant'
export default {
  name: 'Choice',
  components: {
    Button,
    Loading,
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
