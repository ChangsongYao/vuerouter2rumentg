// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(VueRouter);

let token;

const EzHome = {template:'<h1>HOME</h1>'}
const EzBlogs = {template:'<h1>BLOGS</h1>'}
const EzAbout = {template:'<h1>ABOUT</h1>'}
const EzAdmin = {
  template:`
    <div class="admin">
      <h1>ADMIN</h1>
      <button @click="logout">LOGOUT</button>
    </div>
  `,
  methods:{
    logout(){
      token = undefined
      this.$router.push('/login')
    }
  }
}
const EzLogin = {
  template: `
    <form @submit.prevent="auth">
      <input placeholder="name">
      <input placeholder="password">
      <input type="submit" value="login">
    </form>
  `,
  methods:{
    auth(){
      token = Math.random()
      this.$router.push('/admin')
    }
  }
}

const router = new VueRouter({
  routes:[
    {path:'/',component:EzHome},
    {path:'/blogs',component:EzBlogs},
    {path:'/about',component:EzAbout},
    {path:'/login',component:EzLogin},
    {
      path:'/admin',
      component:EzAdmin,
      beforeEnter(to,from,next){
        if(!token) return next('/login')
        next()
      }
    }
  ]
})


new Vue({
  el:'#app',
  router,
  components: {App},
  template: '<App/>'
})
