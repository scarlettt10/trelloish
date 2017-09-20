const cards = (state = [], action) => {
  switch(action.type) {
    case 'CARDS':
      return action.cards;
    case 'ADD_CARD':
      return [...state, action.card]
    case 'UPDATE_CARD':
      return state.map( card => {
        if(card.id === action.card.id)
          return action.card
        return card
      })
    case 'DELETE_CARD':
      return state.filter( card => card.id !== action.id)
    default:
      return state;
  }
}

export default cards;