<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li :key="m.id" v-for="m in menus" @click="getId(m.id)">
        {{ m.value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to BarTender',
      menus: [
        {id: 1, value: 'whisky'},
        {id: 2, value: '莫吉托'}
      ]
    }
  },
  methods: {
    getId (id) {
      this.$router.push({
        path: `/choice/${id}`
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
