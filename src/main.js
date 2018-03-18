// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(VueRouter);

const EzHome = {template:'<div class="home"><h1>HOME</h1></div>'}
const EzShop = {
  template:`
    <div class="shop">
      <h1>SHOP {{$route.params.id}}</h1>
    </div>`
}
const EzAbout = {template:'<div class="about"><h1>ABOUT</h1></div>'}

const router = new VueRouter({
  routes:[
    {path:'/',component:EzHome},
    {path:'/shop/:id',component:EzShop},
    {path:'/about',component:EzAbout}
  ]
})


new Vue({
  el:'#app',
  router,
  components: {App},
  template: '<App/>'
})
