// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(VueRouter);

const _blogs = [
  {title:'blog 1#',content:'content of blog 1#...'},
  {title:'blog 2#',content:'content of blog 2#...'},
  {title:'blog 3#',content:'content of blog 3#...'},
]

Vue.mixin({
  beforeCreate(){ this.$blogs = _blogs  }
})

const EzShop ={template:'<h1>SHOP {{$route.params.id}}#</h1>'}

const EzBlog = {
  template:`
    <article>
  	  <h1>{{blog.title}}</h1>
      <p>{{blog.content}}</p>
    </article>
    `,
  computed:{
    blog(){ return this.$blogs[+this.$route.params.idx] }
  }
}

const router = new VueRouter({
  routes:[
    {path:'/blog/:idx',component:EzBlog}
  ]
})


new Vue({
  el:'#app',
  router,
  components: {App},
  template: '<App/>'
})
