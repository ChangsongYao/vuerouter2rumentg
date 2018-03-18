<template>
  <div id="app" v-cloak>
    <router-link to="/">首页</router-link>
    <router-link to="/shop/1">1号店</router-link>
    <router-link to="/shop/2">2号店</router-link>
    <router-link to="/about">关于</router-link>
    <ez-view></ez-view>
    <pre>{{$route}}</pre>
  </div>
</template>

<script>
  import App from './App'
  import VueRouter from 'vue-router'

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

  export default {
    name: 'App',
    router,
    components:{EzView}
  }
</script>

<style>
  [v-cloak]{
    height:2px;
    overflow:hidden;
  }
  [v-cloak]:before{
    content:' ';
    display:block;
    border-bottom:2px solid red;
    animation: progress 2s infinite;
  }
  @keyframes progress{
    0%{width:0%}
    100%{width:90%}
  }
  a{
    text-decoration: none;
    color:black;
    padding:10px 20px;
    text-align:center;
  }
  .router-link-exact-active{
    color: bold;
    border-bottom: 2px solid red;
  }
  pre{
    font-family:Consolas;
  }

</style>
