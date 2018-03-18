// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(VueRouter);

const EzHome = {template:'<h1>HELLO, {{$route.query.user }}</h1>'}
const EzShop = {
  template:`
    <div class="shop">
      <h1>SHOP {{$route.query.id}}#</h1>
      <p>{{$route.query.message}}</p>
      <img :src="$route.query.banner" class="banner">
    </div>
  `,
}
const EzAbout = {template:'<h1>ABOUT</h1>'}

const router = new VueRouter({
  routes:[
    {path:'/',component:EzHome},
    {path:'/shop',component:EzShop},
    {path:'/about',component:EzAbout}
  ]
})


new Vue({
  el:'#app',
  router,
  components: {App},
  template: '<App/>'
})
