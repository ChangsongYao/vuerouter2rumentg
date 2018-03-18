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
  template:`
    <div class="home">
      <h1>HOME</h1>
      <div class="channel-box" v-for="i in 20">栏目 —— {{i}}#</div>
    </div>
  `
}
const EzBlog = {
  template:`
    <div class="blogs">
      <h1>BLOG</h1>
      <ul>
      	<li v-for="i in 40">
          <a href="#" @click.prevent>博客文章 —— {{i}}#</a>
        </li>
      </ul>
    </div>
  `
}
const EzAbout = {template:'<h1>ABOUT</h1>'}

const router = new VueRouter({
  routes:[
    {path:'/',component:EzHome},
    {path:'/blog',component:EzBlog},
    {path:'/about',component:EzAbout}
  ]
})

new Vue({
  el:'#app',
  router,
  components: {App},
  template: '<App/>'
})
