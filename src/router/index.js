import Vue from 'vue'
import Router from 'vue-router'
import Choice from '../components/Choice'
import Draw from '../components/Draw'
import Container from '../components/Container'
import Wine from '../components/Wine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Draw',
      component: Draw,
    },
    {
      path: '/index',
      component: Container,
      children: [
        {
          path: '/choice/:id',
          name: 'choice',
          component: Choice,
        },
        {
          path: '/wine/:id',
          name: 'wine',
          component: Wine,
        },
      ],
    },
  ],
})
