import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './services/todos';

export default combineReducers({
  [todos.constants.NAME]: todos.reducer,
  router: routerReducer
})
