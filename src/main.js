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
const EzAbout = {template:'<h1>ABOUT</h1>'}
const EzShop = {
  template:'<h1>SHOP {{id}}</h1>',
  computed:{
    id(){ return this.$route.params.id}
  }
}

const EzView = {
  render(h){
    if(this.$route.matched.length == 0 ) return h();
    const comp = this.$route.matched[0].components.default;
    return h(comp);
  }
}

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
