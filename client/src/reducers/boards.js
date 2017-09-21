const boards = (state = [], action) => {
  switch(action.type) {
    case 'BOARDS':
      return action.boards;
    case 'ADD_BOARD':
      return [...state, action.board]
    case 'UPDATE_BOARD':
      return state.map( board => {
        if(board.id === action.board.id)
          return action.board
        return board
      })
    case 'DELETE_BOARD':
      return state.filter( board => board.id !== action.id)
    default:
      return state;
  }
}

export default boards;