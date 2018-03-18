<template>
  <div id="app" v-cloak>
    <nav>
      <router-link to="/" tag="img" src="static/matrix-logo.jpg" alt="home">首页</router-link>
      <router-link to="/shop/1">1号店</router-link>
      <router-link to="/shop/2">2号店</router-link>
      <router-link to="/about">关于</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import VueRouter from 'vue-router'
  const EzHome = {template:'<h1>HOME</h1>'}
  const EzShop = {template:'<h1>SHOP {{$route.params.id}}#</h1>'}
  const EzAbout = {template:'<h1>ABOUT</h1>'}

  const router = new VueRouter({
    routes:[
      {path:'/',component:EzHome,name:'home'},
      {path:'/shop/:id',component:EzShop,name:'shop'},
      {path:'/about',component:EzAbout,name:'about'}
    ]
  })

  const EzLink = {
    props:['to'],
    render(h){
      const router = this.$router
      const route = this.$route

      const data = {
        class:{
          'router-link-exact-active': route.path === this.to
        },
        attrs:{
          href: this.to
        },
        on:{
          click: evt => {
            evt.preventDefault()
            router.push(this.to)
          }
        }
      }
      return h('a',data,this.$slots.default)
    }
  }

  export default {
    name: 'App',
    router,
    components:{EzLink}
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
  nav > *{
    vertical-align:middle;
    display:inline-block;
    border:none;
    padding:10px 20px;
    cursor:pointer;
  }
  nav > a{
    text-decoration: none;
    color:black;
    text-align:center;
  }
  nav > *.router-link-exact-active{
    color: bold;
    border-bottom: 2px solid red;
  }


</style>
