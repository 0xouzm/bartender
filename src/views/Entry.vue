<template>
  <div>
    <p>
      THE TEST RESULT IS FOR REFERENCE ONLY, PLEASE REFER TO THE ACTUAL FLAVOR DESCRIPTION OF THE
      COCKTAIL. IF YOU ORDER A COCKTAIL THAT YOU DON’T LIKE, IT’S JUST AN ACCIDENT :)
    </p>
    <p>结果仅供参考，请以实际风味说明为准 如有踩雷，纯属意外</p>
    <router-link :to="{ name: 'choice', params: { id: 1 } }" class="link">NEXT</router-link>
  </div>
</template>

<script>
export default {
  name: 'Entry',
}
</script>

<style scoped>
p {
  padding: 0 50px;
}
</style>
