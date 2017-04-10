export default {
  displayOneCard: (state) => {
    var card_id = state.msg;
    console.log('---------getter---------'+card_id);
    state.cards.forEach(card => {
      if (card._id === card_id) {
          return state.card = card;
      }
    })
  }
}
