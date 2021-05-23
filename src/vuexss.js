import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ssk:''
  },
  mutations: {
    bc(state,ssk){
      state.ssk=ssk
    }
  },
  actions: {

  }
})
