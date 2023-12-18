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
    case appAction.ADD_PRODUCT:
      return {
        ...state,
        carts: [ ...state.carts, payload ]
      }

    case appAction.REMOVE_PRODUCT:
      return {
        ...state,
        carts: state.carts.filter(cart => cart.id !== payload.productId)
      }

    case appAction.CHANGE_QUANTITY:
      return {
        ...state,
        carts: payload
      }
    default:
      return state;
  }
}