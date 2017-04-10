import Vue from 'vue'

// vue与后台的数据流交换层

const beginLoading = commit => {
  commit('LOADING_TOGGLE', true)
  return Date.now()
}

const stopLoading = (commit, start, timeAllowed = 400) => {
  const spareTime = timeAllowed - (Date.now() - start)
  setTimeout(commit, spareTime > 0 ? spareTime : 0, 'LOADING_TOGGLE', false)
}

const doToast = (state, commit, payload) => {
  commit('SET_TOAST', payload)
  commit('TOASTING_TOGGLE', true)
  return state.toast.promise
}

Promise.prototype.finally = function (callback) {
  return this.then(
    value => Promise.resolve(callback()).then(() => value),
    reason => Promise.resolve(callback()).then(() => {
      throw reason
    })
  )
}


// 前端action层

export default {
  getUser: ({commit},id) => {
    const start = beginLoading(commit);
    return Vue.http.get('/api/getUser',{params: {id}})
      .then(response => response.json())
      .then(user => {
        //stopLoading(commit, start)
        commit('SET_USER', user)
      })
  },
  getCards: ({commit}) => {
      const start = beginLoading(commit)
      return Vue.http.get('/api/getCards')
          .then(response => response.json())
          .then(cards => {
              //stopLoading(commit, start)
              commit('SET_CARDS', cards)
          })
  },
  saveCard ({state, commit}) {
      console.log('－－－－－－－－－－》'+state.card)
      return Vue.http.post('/api/saveCard', state.card)
          .then(
            //() => doToast(state, commit, {info: '保存成功,是否返回?', btnNum: 2}),
            //() => doToast(state, commit, {info: '保存失败', btnNum: 1})
          )
          //.finally(() => commit('TOASTING_TOGGLE', false))
    }
}
