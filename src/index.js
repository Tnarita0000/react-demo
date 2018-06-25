import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { getAllProducts } from './actions'
import App from './containers/App'
import { reduxFirestore } from 'redux-firestore'
import { reactReduxFirebase } from 'react-redux-firebase'
import { firebase } from './reducers/firebase'

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase),
  reduxFirestore(firebase)
)(createStore)

const store = createStoreWithFirebase(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...[thunk])
)
store.dispatch(getAllProducts())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
