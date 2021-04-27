<template>
  <div>
    choice: {{ $route.params.id }}
    <button @click="$router.back()">back</button>
  </div>
</template>

<script>
export default {
  name: 'Choice'
}
</script>

<style scoped>

</style>
