<template>
  <div id="app" v-cloak>
    <nav class="header">
      <router-link to="/">首页</router-link>
      <router-link to="/shop/1">1号店</router-link>
      <router-link to="/shop/2">2号店</router-link>
      <router-link to="/about">关于</router-link>
    </nav>
    <transition appear
                appear-active-class="animated fadeIn"
                enter-active-class="animated zoomIn">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App'
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
  body{
    overflow:hidden
  }
  nav a{
    text-decoration: none;
    color:black;
    padding:10px 20px;
    text-align:center;
  }
  .router-link-exact-active{
    color: bold;
    border-bottom: 2px solid red;
  }
  .home,.shop,.about{
    position:absolute;
    left:10px;
    top:50px;
    right:10px;
    bottom:10px;
    padding: 5px 20px;
    color:white;
  }
  .home{
    background:#700;
  }
  .shop{
    background:#070;
  }
  .about{
    background:#007;
  }

</style>
