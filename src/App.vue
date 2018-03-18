<template>
  <div id="app" v-cloak>
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/blog">博客</router-link>
      <router-link to="/about">关于</router-link>
    </nav>
    <div class="content">
      <router-view></router-view>
    </div>
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
  nav{
    position:fixed;
    display:block;
    left:0;top:0;
    right:0;
    padding:15px;
    background:#333;
    opacity:0.8;
  }
  .content{
    margin-top:50px;
  }
  .channel-box{
    height:100px;
    background:#f0f0f0;
    margin-bottom:10px;
    text-align:center;
    line-height:100px;
  }
  nav a{
    text-decoration: none;
    color:#fff;
    padding:10px 20px;
    text-align:center;
  }
  .router-link-exact-active{
    color: bold;
    border-bottom: 2px solid red;
  }
  .blogs li{
    line-height:30px;
  }
  pre{
    font-family:Consolas;
  }

</style>
