import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Legal from '@/components/legal'
import Privacy from '@/components/privacy'
import VueParticles from 'vue-particles'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueParticles);
Vue.use(ElementUI);
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  },{
    path: '/legal',
    name: 'Legal',
    component: Legal
  },{
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }

})
