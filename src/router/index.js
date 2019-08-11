import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LP from '@/components/LP'
import FizzBuzz from '@/components/FizzBuzz'
import Lambda from '@/components/Lambda'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/lp',
      name: 'LP',
      component: LP
    }, {
      path: '/fizzbuzz',
      name: '/FizzBuzz',
      component: FizzBuzz
    }, {
      path: '/lambda',
      name: '/Lambda',
      component: Lambda
    }
  ]
})
