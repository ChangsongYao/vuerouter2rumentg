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
      <button @click="$router.push('/blog')">前往博客组件</button>
    </div>
  `
}
const EzBlogs = {
  template:`
    <div class="blogs">
  	  <h1>BLOGS</h1>
      <button @click="$router.go(-1)">返回前一组件</button>
    </div>
  `,
}
const EzAbout = {template:'<h1>ABOUT</h1>'}

const router = new VueRouter({
  routes:[
    {path:'/',component:EzHome},
    {path:'/blog',component:EzBlogs},
    {path:'/about',component:EzAbout}
  ],
  mode:'abstract'
})

router.push('/')

new Vue({
  el:'#app',
  router,
  filters:{
    map: (arr,key) => arr.map(item => item[key])
  },
  components: {App},
  template: '<App/>'
})
