<template>
  <div id="app" v-cloak>
    <div class="demo" v-for="demo in demos">
      <h4>[{{demo.name}}] {{demo.pattern}}</h4>
      <ul>
        <li v-for="test in demo.tests">
          <router-link :to="test">{{test}}</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data:function () {
      return {
        demos:[
          {
            name: '命名参数',
            pattern: '/named-param/blog/:id',
            tests: [
              '/named-param/blog/123',
              '/named-param/blog/abc'
            ]
          },
          {
            name: '定制命名参数',
            pattern: '/custom-named-param/blog/:id(\\d+)',
            tests:[
              '/custom-named-param/blog/123',
              '/custom-named-param/blog/abc'
            ]
          },
          {
            name: '可选参数',
            pattern: '/optional-param/blog/:id?',
            tests: [
              '/optional-param/blog',
              '/optional-param/blog/787878'
            ]
          },
          {
            name: '零或多个参数',
            pattern: '/zero-or-more-param/fileman/:path*',
            tests: [
              '/zero-or-more-param/fileman/',
              '/zero-or-more-param/fileman/root/var/nginx/README'
            ]
          },
          {
            name: '一个或多个参数',
            pattern: '/one-or-more-param/fileman/:path+',
            tests: [
              '/one-or-more-param/fileman/',
              '/one-or-more-param/fileman/root/var/nginx/README'
            ]
          },
          {
            name: '匿名参数',
            pattern: '/anonymous-param/card/(\\d+)',
            tests:[
              '/anonymous-param/card/123',
              '/anonymous-param/card/abc'
            ]
          },
          {
            name: '任意匹配',
            pattern: '/anonymous-param/card/*',
            tests:[
              '/asterisk-param/card/hubwiz/a/b',
              '/asterisk-param/card/ezsoft'
            ]
          }
        ]
      }
    }
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
  .content{
    position:fixed;
    right:10px;
    top:10px;
    border:1px solid #000;
    width:300px;
    height:200px;
    box-shadow:5px 5px 5px 2px rgba(0,0,0,.2);
  }
  pre{
    font-family:Consolas;
  }

</style>
