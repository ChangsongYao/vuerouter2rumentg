// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(VueRouter);

const EzConfirm = {
  template: `
    <div class="confirm">
      <div class="shadow"></div>
      <div class="inner">
        <div class="box">
          <h4>亲，买点东西再走吧...</h4>
          <button @click="trigger('yes')">好，我再看看</button>
          <button @click="trigger('no')">忙，回头再说</button>
        </div>
      </div>
    </div>
  `,
  methods:{
    trigger(ret){
      this.$emit('ret',ret);
      this.$destroy();
      this.$el.remove();
    }
  }
}
const EzHome = {template:'<h1>HOME</h1>'}
const EzShop = {
  template:'<h1>SHOP {{$route.params.id}}#</h1>',
  beforeRouteEnter(to,from,next){
    next(vm => {
      vm.$store.log('beforeRouteEnter',to.path,from.path);
    });
  },
  beforeRouteUpdate(to,from,next){
    this.$store.log('beforeRouteUpdate',to.path,from.path);
    next();
  },
  beforeRouteLeave(to,from,next){
    this.$store.log('beforeRouteLeave',to.path,from.path);
    this.$confirm(ret => ret === 'yes' ? next(false) : next())
  }

}
const EzAbout = {template:'<h1>ABOUT</h1>'}

const router = new VueRouter({
  routes:[
    {path:'/',component:EzHome},
    {path:'/shop/:id',component:EzShop},
    {path:'/about',component:EzAbout}
  ]
})

const store = new Vue({
  data:{ logs:[]  },
  methods:{
    log(hook,url,referer){
      this.logs.unshift({
        hook: hook,
        url: url,
        referer, referer,
        ts: Date.now()
      })
    }
  }
})

Vue.mixin({
  beforeCreate(){
    this.$store = store;
  },
  methods:{
    '$confirm'(cb){
      const vm = new Vue(EzConfirm).$mount();
      vm.$on('ret',ret => cb(ret) )
      document.body.appendChild(vm.$el);
    }
  },
  filters:{
    tfmt: v => moment(v).format('HH:mm:ss')
  }
})

new Vue({
  el:'#app',
  router,
  components: {App},
  template: '<App/>'
})
