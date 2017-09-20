import { combineReducers } from 'redux';
import cards from './cards';

const rootReducer = combineReducers({
  cards,
});

//initial store
//{}

// apps reducer
// {
//  apps:[]
// }

export default rootReducer;