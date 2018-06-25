import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import favorite, * as fromFavorite from './favorite'
import products, * as fromProducts from './products'
import { firestoreReducer } from 'redux-firestore'

export default combineReducers({
  cart,
  favorite,
  products,
  firestore: firestoreReducer,
})

const getAddedIdsToCart = state => fromCart.getAddedIds(state.cart)
const getAddedIdsToFavorite = state => fromFavorite.getAddedIds(state.favorite)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)

export const getTotal = state =>
  getAddedIdsToCart(state)
    .reduce((total, id) =>
      total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2)

export const getCartProducts = state =>
  getAddedIdsToCart(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))

export const getFavoriteProducts = state =>
  getAddedIdsToFavorite(state).map(id => ({
    ...getProduct(state, id)
  }))
