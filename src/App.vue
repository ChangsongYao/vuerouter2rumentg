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
  import VueRouter from 'vue-router'
  const EzHome = {template:'<h1>HOME</h1>'}

  const EzBlogs = {
    data(){
      return {
        blogs:[
          {title:'blog 1#',content:'content of blog 1#...'},
          {title:'blog 2#',content:'content of blog 2#...'},
          {title:'blog 3#',content:'content of blog 3#...'}]
      }
    },
    template:`
    <div class="blogs">
      <nav>
        <router-link v-for="(blog,idx) in blogs"
          :to="'/blog/' + idx"
          active-class="blog-active"
          exact-active-class="blog-exact-active">
          {{blog.title}}
        </router-link>
      </nav>
      <router-view></router-view>
    </div>
  `
  }

  const EzBlog = {
    template:`
    <article>
  	  <h1>{{blog.title}}</h1>
      <p>{{blog.content}}</p>
    </article>
    `,
    computed:{
      blog(){ return this.$parent.blogs[+this.$route.params.idx] }
    }
  }


  const EzAbout = {template:'<h1>ABOUT</h1>'}

  const router = new VueRouter({
    routes:[
      {path:'/',component:EzHome},
      {
        path:'/blog',
        component:EzBlogs,
        children:[
          {path:':idx',component:EzBlog}
        ]
      },
      {path:'/about',component:EzAbout}
    ]
  })

  export default {
    name: 'App',
    router
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
  .blogs a.blog-exact-active{
    background:blue;
    color:white;
  }
  pre{
    font-family:Consolas;
  }


</style>
