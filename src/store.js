import { applyMiddleware, combineReducers, createStore } from "redux";

import { appReducer } from './redux/app.reducer';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  app: appReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

/*
store = {
  app: {
    isLoading: false,
    theme: 'light'
  },
  todo: {
    todos: [],
    todoItem: null
  }
}


const storeReducer = {
   switch (type) {
    case appAction.SET_LOADING:
      return {
        ...state,
        isLoading: payload 
      }
    case todoAction.FETCH_TODO:
      return {
        ...state,
        todos: payload 
      }
    case todoAction.ADD_TODO: {
      return {
        ...state,
        // todos: state.todos.concat(payload)
        todos: [...state.todos, payload]
      }
    }
    default:
      return state;
  }
}
*/

// todos: state.todo.todos