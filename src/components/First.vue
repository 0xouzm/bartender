<template>
  <div>
    <div>WHAT SHOULD DRINK</div>
    <div>今天喝什么 ?</div>
    <div>
      <router-link :to="{ path: '/entry' }" class="link">NEXT</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'First',
}
</script>

<style scoped></style>
