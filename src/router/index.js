import Vue from 'vue'
import Router from 'vue-router'
import Choice from '../components/Choice'
import Draw from '../components/Draw'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Draw',
      component: Draw,
    },
    {
      path: '/choice/:id',
      name: 'Choice',
      component: Choice,
    },
  ],
})
