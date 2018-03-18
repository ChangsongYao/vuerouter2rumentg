// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(VueRouter);

const EzNewsColumn = {
  template:`
    <div class="news-column">
      <h2>{{tag}}</h2>
      <ul>
        <li v-for="_news in news">
          <a href="#" @click.prevent>{{_news.title}}</a>
        </li>
      </ul>
    </div>
  `,
  computed:{
    tag() { return this.$route.params.tag },
    news(){
      return this.$parent.news.filter(n =>
        n.tag === this.$route.params.tag)
    }
  }
}

const EzAdvert = {
  template:`
    <div class="advert">
      <img :src="ad_url">
    </div>
  `,
  computed:{
    ad_url(){ return 'static/ad_' + this.$route.params.tag + '.jpg' }
  }
}

const router = new VueRouter({
  routes:[
    {
      path:'/:tag',
      components:{
        default: EzNewsColumn,
        advert: EzAdvert
      }
    }
  ]
})

router.push('/国内')

new Vue({
  el:'#app',
  router,
  components: {App},
  template: '<App/>'
})
