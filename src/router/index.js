import Vue from 'vue'
import Router from 'vue-router'
import Choice from '../views/Choice'
// import Draw from '../components/Draw'
import Container from '../components/Container'
import Wine from '../views/Wine'
import Entry from '../views/Entry'
import First from '../components/First'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Draw',
    //   component: Draw,
    // },
    {
      path: '/',
      component: First,
    },
    {
      path: '/entry',
      component: Entry,
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
