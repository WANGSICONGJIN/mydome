// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入js文件
import './assets/js/remScale'
// 导入css文件
import './assets/css/public.css'
import './assets/css/reset.css'

// 引入ui框架

import element from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(element)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  element,
  components: { App },
  template: '<App/>'
})
