import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

const addToFavoriteUnsafe = productId => ({
  type: types.ADD_TO_FAVORITE,
  productId
})

const removeToFavoriteUnsafe = productId => ({
  type: types.REMOVE_TO_FAVORITE,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const addToFavorite = productId => (dispatch, getState) => {
  if (!getState().favorite.addedIds.includes(productId)) {
    dispatch(addToFavoriteUnsafe(productId))
  }
}

export const removeToFavorite = productId => (dispatch, getState) => {
  if (getState().favorite.addedIds.includes(productId)) {
    dispatch(removeToFavoriteUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}
