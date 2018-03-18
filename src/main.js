// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(VueRouter);

const EzHome = {
  props:{
    user: {
      default:'Anonymous'
    }
  },
  template:'<h1>HELLO, {{user}}</h1>'
}
const EzShop = {
  props:['id','message','banner'],
  template:`
    <div class="shop">
      <h1>SHOP {{id}}#</h1>
      <p>{{message}}</p>
      <img :src="banner" class="banner">
    </div>
  `,
}
const EzAbout = {template:'<h1>ABOUT</h1>'}

const router = new VueRouter({
  routes:[
    {path:'/',component:EzHome},
    {
      path:'/shop',
      component:EzShop,
      props: route => route.query
    },
    {path:'/about',component:EzAbout}
  ]
})


new Vue({
  el:'#app',
  router,
  components: {App},
  template: '<App/>'
})
