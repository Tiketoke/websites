import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const state={//要设置的全局访问的state对象
  msg:'c11111'
  //要设置的初始属性值
};
const actions = {
  saveName({commit}, msg) {
    commit('saveMsg', msg)    // 提交到mutations中处理
  }
}
// 更新状态
const mutations = {
  saveMsg(state, msg) {
    state.msg = msg;
  }
}
// 获取状态信息
const getter = {
  showState(state) {
    console.log(state.msg)
  }
}


// 下面这个相当关键了，所有模块，记住是所有，注册才能使用
export default new Vuex.Store({
  state,
  getter,
  mutations,
  actions
})


