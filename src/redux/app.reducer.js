import * as appAction from './app.actions';

const initialState = {
  isLoading: false,
  carts: [ {
    id: 1,
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png",
    name: "Nike Air Zoom Pegasus 36",
    description:
      "The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.",
    price: 108.97,
    color: "#e1e7ed",
    quantity: 1,

  }, ]
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
      console.log('payload', payload)
      return {
        ...state,
        carts: payload
      }
    default:
      return state;
  }
}