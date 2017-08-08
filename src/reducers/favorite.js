import {ADD_TO_FAVORITE, REMOVE_TO_FAVORITE} from '../constants/ActionTypes'

const initialState = {
  addedIds: []
}


const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return [ ...state, action.productId]
    case REMOVE_TO_FAVORITE:
      state.map( (value, index) => {
        if (value === action.productId) {
          state.splice(index, 1)
        }
        return state;
      });
      return state;
    default:
        return state
  }
}

export const getAddedIds = state => state.addedIds

const favorite = (state = initialState, action) => {
  return {
    addedIds: addedIds(state.addedIds, action)
  }
}

export default favorite;
