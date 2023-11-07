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
  if (!index) return -1;

  if (action === 'increment') {
    clonedCart[ index ].quantity++;
    dispatch(changeQuantity(clonedCart))
  }
}


