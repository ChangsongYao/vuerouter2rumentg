<template>
  <div id="app" v-cloak>
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/shop?id=1&message=你好，欢迎光临1号店&banner=static/shop1-banner.jpg">1号店</router-link>
      <router-link to="/shop?id=2&message=2号店欢迎你的光临&banner=static/shop2-banner.jpg">2号店</router-link>
      <router-link to="/about?contact=62881122">关于</router-link>
    </nav>
    <router-view></router-view>
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
  img.banner{
    width:100%;
  }

</style>
