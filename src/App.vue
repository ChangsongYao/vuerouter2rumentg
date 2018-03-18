<template>
  <div id="app" v-cloak>
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/blog">博客</router-link>
      <router-link to="/about">关于</router-link>
    </nav>
    <router-view></router-view>
    <pre>{{$route}}</pre>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods:{
      href(){ return window.location.href}
    },
    watch:{
      '$route'(){ this.$forceUpdate() }
    },
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
