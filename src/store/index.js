import Vue        from 'vue'
import Vuex       from 'vuex'
import actions    from './actions'
import mutations  from './mutations'
import getters    from './getters'
Vue.use(Vuex)

// 用于管理vue 组件数据流状态

const store = new Vuex.Store({
  state: {
    cards: [],
    card: {},
    user: {},
    board: {},
    msg:'hi'
  },
  mutations,
  getters,
  actions
})
export default store
