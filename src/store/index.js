//引入核心库
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'

Vue.use(Vuex)


import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})