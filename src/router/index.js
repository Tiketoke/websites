import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Legal from '@/components/legal'
import Privacy from '@/components/privacy'
import VueParticles from 'vue-particles'
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueParticles);
Vue.use(VueI18n);
Vue.use(ElementUI);
Vue.use(Router);
const i18n = new VueI18n({
  locale: 'cn',    // 语言标识
  messages: {
    'cn': require('./lang/cn'),   // 中文语言包
    'en': require('./lang/en')    // 英文语言包
  },
});
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
export default  i18n
