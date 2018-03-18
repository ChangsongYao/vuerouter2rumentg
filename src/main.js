// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(VueRouter);

const EzHome = {template:'<h1>HOME</h1>'}
const EzBlogs = {template:'<h1>BLOGS</h1>'}
const EzAbout = {template:'<h1>ABOUT</h1>'}
const EzAdmin = {template:'<h1>ADMIN</h1>'}

const router = new VueRouter({
  routes:[
    {path:'/',component:EzHome},
    {path:'/blogs',component:EzBlogs},
    {path:'/about',component:EzAbout},
    {path:'/admin',component:EzAdmin}
  ]
})

router.beforeEach((to,from,next)=>{
  store.log(to.path,from ? from.path : undefined)
  next()
})


const store = new Vue({
  data:{ logs:[]  },
  methods:{
    log(url,referer){
      this.logs.unshift({
        url: url,
        referer, referer,
        ts: Date.now()
      })
    }
  }
})

Vue.mixin({
  beforeCreate(){
    this.$store = store;
  },
  filters:{
    tfmt: v => moment(v).format('HH:mm:ss')
  }
})


new Vue({
  el:'#app',
  router,
  components: {App},
  template: '<App/>'
})
