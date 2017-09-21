import axios from 'axios';

// get all apps - index action of our apps controller
// this.props.dispatch(getApps())
export const getBoards = () => {
  // thunk
  return(dispatch) => {
    axios.get('/api/boards')
      .then( res => dispatch({ type: 'BOARDS', boards: res.data }))
      .catch( err => console.log(err))
  }
}

// add an app - create action of our apps controller
// res.data = { id: 1, name: 'Angry Birds', featured: true }
export const addBoard = (board) => {
  return(dispatch) => {
    axios.post('/api/boards', { board })
      .then( res => dispatch({ type: 'ADD_BOARD', board: res.data }))
  }
}

// update an app - update action of our apps controller
export const updateBoard = (board) => {
  return (dispatch) => {
    axios.put(`/api/boards/${board.id}`, { board } )
      .then( res => dispatch({ type: 'UPDATE_BOARD', board: res.data }) )
  }
}

// delete an app - destory action of our apps controller
export const deleteBoard = (id) => {
  return(dispatch) => {
    axios.delete(`/api/boards/${id}`)
      .then( res => dispatch({ type: 'DELETE_BOARD', id }))
  }
}

export default axios;