export const SET_LOADING = 'APP/SET_LOADING';

export const ADD_PRODUCT = 'APP/ADD_PRODUCT';
export const REMOVE_PRODUCT = 'APP/REMOVE_PRODUCT';
export const CHANGE_QUANTITY = 'APP/CHANGE_QUANTITY';



// action creator
export const setLoading = payload => ({
  type: SET_LOADING,
  payload
})


export const addProduct = payload => ({
  type: ADD_PRODUCT,
  payload
})

export const removeProduct = productId => ({
  type: REMOVE_PRODUCT,
  payload: {
    productId
  }
})

export const changeQuantity = payload => ({
  type: CHANGE_QUANTITY,
  payload
})

export const changeQuantityThunk = (id, action) => (dispatch, getState) => {
  const clonedCart = JSON.parse(JSON.stringify(getState().app.carts))
  const index = clonedCart.findIndex(item => item.id === id)
  // if (action === 'increment') {
  //   clonedCart[ index ].quantity++;
  //   dispatch(changeQuantity(clonedCart))
  // }
  // else {

  //   clonedCart[ index ].quantity--;
  //   dispatch(changeQuantity(clonedCart))
  // }


  action === 'increment' ? clonedCart[ index ].quantity++ : clonedCart[ index ].quantity--
  if (clonedCart[ index ].quantity == 0) {
    return dispatch(removeProduct(id))
  }
  dispatch(changeQuantity(clonedCart))


}

export const addProductThunk = product => (dispatch, getState) => {
  const isAdded = getState().app.carts.some(cart => cart.id == product.id)
  !isAdded ? dispatch(addProduct(product)) : dispatch(changeQuantityThunk(product.id, 'increment'))


}



