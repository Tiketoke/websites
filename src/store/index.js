import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const state={
  msg:'cn'
};
const getters = {   //实时监听state值的变化(最新状态)
  setMsg(state) {  //承载变化的showFooter的值
    return state.msg
  }
};
const mutations = {
  showmsg(state,msg) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    state.msg = msg;
  }
};



// 下面这个相当关键了，所有模块，记住是所有，注册才能使用
export default new Vuex.Store({
  state,
  getters,
  mutations,
})


