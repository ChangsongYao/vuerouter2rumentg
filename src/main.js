// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(VueRouter);

const EzHome = {template:'<h4>渲染结果看这里</h4>'}
const EzBlog = {template:'<h4>BLOG {{$route.params.id}}</h4>'}
const EzFileMan = {template:'<h4>FILE {{$route.params.path}}</h4>}'}
const EzCard = {template:'<h4>CARD {{$route.params[0]}}</h4>'}

const router = new VueRouter({
  routes:[
    {path:'/',component:EzHome},
    {path:'/named-param/blog/:id',component:EzBlog},
    {path:'/custom-named-param/blog/:id(\\d+)',component:EzBlog},
    {path:'/optional-param/blog/:id?',component:EzBlog},
    {path:'/zero-or-more-param/fileman/:path*',component:EzFileMan},
    {path:'/one-or-more-param/fileman/:path+',component:EzFileMan},
    {path:'/anonymous-param/card/(\\d+)',component:EzCard},
    {path:'/asterisk-param/card/*',component:EzCard}
  ]
})


new Vue({
  el:'#app',
  router,
  components: {App},
  template: '<App/>'
})
