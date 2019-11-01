import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import grobalValiables from '../mixins/globalValiables'
import axiosHandler from '../mixins/axios.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.mixin(grobalValiables)
Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
