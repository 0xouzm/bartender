// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'normalize.css/normalize.css'
import { Image as VanImage } from 'vant'
import global from './assets/Common.vue'

Vue.use(VanImage)
Vue.config.productionTip = false
Vue.prototype.common = global
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
