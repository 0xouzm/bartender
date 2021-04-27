<template>
  <div class="container">
<!--    <img src="../assets/logo.png" alt="">-->
    <div>

      choice: {{ $route.params.id }}
      <button @click="$router.back()">back</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Choice'
}
</script>

<style scoped>
.container{
  height: 100%;
}

/*img {*/
/*  width: 300px;*/
/*  height: 300px;*/
/*}*/
</style>
