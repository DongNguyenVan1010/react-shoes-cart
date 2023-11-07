export const SET_LOADING = 'APP/SET_LOADING';
export const ADD_TO_CART = 'APP/ADD_TO_CART';
export const REMOVE_ITEM = 'APP/REMOVE_ITEM';
export const SET_QUANTITY = 'APP/SET_QUANTITY';

// action creator
export const setLoading = payload => ({
  type: SET_LOADING,
  payload
})

export const addToCart = payload => ({
  type: ADD_TO_CART,
  payload
})

export const removeItem = payload => ({
  type: REMOVE_ITEM,
  payload
})

export const setQuantity = (payload) => ({
  type: SET_QUANTITY,
  payload
})


export const setQuantityAsync = (id, type) => (dispatch, getState) => {
  const clonedCarts = JSON.parse(JSON.stringify(getState().app.carts)); // deep clone
  const index = clonedCarts.findIndex(item => item.id ===id);
  if(index === -1)  return;

  if(type === 'increment') {
    clonedCarts[index].quantity++;
  }
  if(type === 'decrement') {
    clonedCarts[index].quantity--;
  }

  if(clonedCarts[index].quantity === 0) {
    clonedCarts.splice(index, 1);
  }
  
  dispatch(setQuantity(clonedCarts))

}