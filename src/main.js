// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(VueRouter);

const EzNewsColumn = {
  props:{
    tag: {required:true},
    bgcolor:{ default:'#fff'}
  },
  template:`
    <div class="news-column" :style="{background:bgcolor}">
      <h2>{{tag}}</h2>
      <ul>
        <li v-for="_news in news">
          <a href="#" @click.prevent>{{_news.title}}</a>
        </li>
      </ul>
    </div>
  `,
  computed:{
    news(){
      return this.$parent.news.filter(n =>
        n.tag === this.tag)
    }
  }
}

const EzAdvert = {
  props:['altText'],
  template:`
    <div class="advert">
      <img :src="ad_url" :alt="altText">
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
      },
      props:{
        advert: {altText:'__advert__787887878__'},
        default:route => {
          const colorMap = {
            '国内' : 'rgb(217, 219, 225)',
            '国际' : 'rgb(181, 210, 181)',
            '娱乐' : 'rgb(222, 199, 214)',
            '科技' : 'rgb(216, 216, 222)',
            '财经' : 'rgb(253, 224, 165)',
            '体育' : 'rgb(150, 247, 178)',
            '军事' : 'rgb(135, 200, 121)',
            '社会' : 'rgb(220, 201, 231)'
          }
          return {
            tag: route.params.tag,
            bgcolor:colorMap[route.params.tag]
          }
        }
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
