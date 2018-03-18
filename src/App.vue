<template>
  <div id="app" v-cloak>
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/shop/1">1号店</router-link>
      <router-link to="/shop/2">2号店</router-link>
      <router-link to="/about">关于</router-link>
    </nav>
    <router-view></router-view>
    <div class="logs">
      <div class="log" v-for="log in $store.logs">
        {{log.ts | tfmt}} <b>{{log.hook}}</b> {{log.url}} &larr; {{log.referer}}
      </div>
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
  .log{
    line-height: 30px;
  }
  .confirm{
    position:fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    z-index:100;
  }
  .confirm > *{
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
  }
  .confirm .shadow{
    background:#000;
    opacity:0.6;
  }
  .confirm .inner{
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .confirm .box{
    background:white;
    border: 1px solid #ccc;
    width:300px;
    height:120px;
    text-align:center;
  }

</style>
