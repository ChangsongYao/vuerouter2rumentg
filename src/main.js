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
const EzBlogs = {template:'<div class="blogs"><h1>BLOGS</h1></div>'}
const EzAbout = {template:'<div class="about"><h1>ABOUT</h1></div>'}

const router = new VueRouter({
  routes:[
    {path:'/',component:EzHome},
    {path:'/blogs',component:EzBlogs},
    {path:'/about',component:EzAbout}
  ]
})
new Vue({
  el:'#app',
  router,
  components: {App},
  template: '<App/>'
})
