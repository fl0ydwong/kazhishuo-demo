
// 状态变换层
export default {
  SET_USER: (state, user) => {
    state.user = user
  },
  SET_CARDS: (state, cards) => {
    state.cards = cards
  },
  SET_USER: (state, card) => {
     state.card = card
  },
  UPDATE_CONTENT: (state, content) => {
      state.card.content = content
  },
  UPDATE_TITLE: (state, title) => {
      state.card.title = title
  },
  LOADING_TOGGLE: (state, isLoading) => {
    state.isLoading = isLoading
  },
  TOASTING_TOGGLE: (state, isToasting) => {
    state.isToasting = isToasting
  },

}
