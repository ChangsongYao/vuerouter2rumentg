<template>
  <div id="app" v-cloak>
    <nav class="header">
      <router-link to="/" exact>首页</router-link>
      <router-link to="/blog">博客</router-link>
      <router-link to="/about">关于</router-link>
    </nav>
    <router-view></router-view>
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
  nav.header{
    padding:15px;
    background:#f0f0f0;
  }
  nav.header a{
    text-decoration: none;
    color:black;
    padding:10px 20px;
    text-align:center;
  }
  nav.header .router-link-active{
    color: bold;
    border-bottom: 2px solid red;
  }
  div.blogs{
    display:flex;
    margin-top:10px;
  }
  .blogs nav{
    width:150px;
    background:#f0f0f0;
  }
  .blogs article{
    padding: 0px 10px;
    flex:1;
  }
  .blogs a{
    display:block;
    text-decoration: none;
    color:black;
    padding:10px 20px;
    text-align:center;
  }
  .blogs a:hover{
    background:#777;
    color:white;
  }
  .blogs .router-link-exact-active{
    background:blue;
    color:white;
  }
  pre{
    font-family:Consolas;
  }


</style>
