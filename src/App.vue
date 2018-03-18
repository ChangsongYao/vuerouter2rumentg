<template>
  <div id="app" v-cloak>
    <nav>
      <i class="fa fa-arrow-left btn" @click="$router.back()" title="后退"></i>
      <i class="fa fa-arrow-right btn" @click="$router.forward()" title="前进"></i>
      <router-link to="/">首页</router-link>
      <router-link to="/blog">博客</router-link>
      <router-link to="/about">关于</router-link>
    </nav>
    <router-view></router-view>
    <pre>当前定位：{{$router.history.index}}</pre>
    <pre>{{$router.history.stack | map('path')  }}</pre>
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
  i.btn{
    padding:10px 20px;
    cursor:pointer;
  }
  pre{
    font-family:Consolas;
  }


</style>
