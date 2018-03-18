// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(VueRouter);

const EzHome = {template:'<h1>HOME</h1>'}
const EzBlogs = {template:'<h1>BLOGS</h1>'}
const EzAbout = {template:'<h1>ABOUT</h1>'}

const router = new VueRouter({
  routes:[
    {path:'/',component:EzHome},
    {path:'/blogs',component:EzBlogs,name:'blogs'},
    {path:'/about',component:EzAbout},
    {path:'/archives',redirect:'/blogs'}
  ]
})

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
