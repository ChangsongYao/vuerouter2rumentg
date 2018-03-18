<template>
  <div id="app" v-cloak>
    <div class="main">
      <nav>
        <router-link to="/shop/1">1号店</router-link>
        <router-link to="/shop/2">2号店</router-link>
        <router-link v-for="(blog,idx) in $blogs" :to="'/blog/' + idx">
          {{blog.title}}
        </router-link>
      </nav>
      <router-view></router-view>
    </div>
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
  div.main{
    display:flex;
  }
  nav{
    width:150px;
    background:#f0f0f0;
  }
  article{
    padding: 0px 10px;
    flex:1;
  }
  a{
    display:block;
    text-decoration: none;
    color:black;
    padding:10px 20px;
    text-align:center;
  }
  a:hover{
    background:#777;
    color:white;
  }
  .router-link-exact-active{
    background:blue;
    color:white;
  }
  pre{
    font-family:Consolas;
  }

</style>
