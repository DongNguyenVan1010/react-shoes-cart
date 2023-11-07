import * as appAction from './app.actions';

const initialState = {
  isLoading: false,
  carts: []
}

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case appAction.SET_LOADING:
      return {
        ...state,
        isLoading: payload 
      }
    case appAction.ADD_TO_CART: 
      return {
        ...state,
        carts: [...state.carts, payload]
      }

    case appAction.REMOVE_ITEM:
      return {
        ...state,
        carts: state.carts.filter(item => item.id !== payload)
      }

    case appAction.SET_QUANTITY: {
      return {
        ...state,
        carts: payload
      }
    }
   
    default:
      return state;
  }
}