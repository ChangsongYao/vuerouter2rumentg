// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(VueRouter);

const EzHome = {template:'<h1>HOME</h1>'}

const EzBlogs = {
  data(){
    return {
      blogs:[
        {title:'blog 1#',content:'content of blog 1#...'},
        {title:'blog 2#',content:'content of blog 2#...'},
        {title:'blog 3#',content:'content of blog 3#...'}]
    }
  },
  template:`
    <div class="blogs">
      <nav>
        <router-link v-for="(blog,idx) in blogs" :to="'/blog/' + idx">
          {{blog.title}}
        </router-link>
      </nav>
      <router-view></router-view>
    </div>
  `
}

const EzBlog = {
  template:`
    <article>
  	  <h1>{{blog.title}}</h1>
      <p>{{blog.content}}</p>
    </article>
    `,
  computed:{
    blog(){ return this.$parent.blogs[+this.$route.params.idx] }
  }
}


const EzAbout = {template:'<h1>ABOUT</h1>'}

const router = new VueRouter({
  routes:[
    {path:'/',component:EzHome},
    {
      path:'/blog',
      component:EzBlogs,
      children:[
        {path:':idx',component:EzBlog}
      ]
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
