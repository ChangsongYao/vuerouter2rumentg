<template>
  <div id="app" v-cloak>
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  [v-cloak] {
    height: 2px;
    overflow: hidden;
  }

  [v-cloak]:before {
    content: ' ';
    display: block;
    border-bottom: 2px solid red;
    animation: progress 2s infinite;
  }

  @keyframes progress {
    0% {
      width: 0%
    }
    100% {
      width: 90%
    }
  }

</style>
