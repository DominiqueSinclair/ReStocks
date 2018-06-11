import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { browserHistory } from 'react-router'
import makeRootReducer from './reducers'
import api from '../api/remote'
import { updateLocation } from '../actions/location'

const createStore = (initialState = {}) => {
  initialState.settings = {
    counter: 20,
    interval: 1000,
    autorefresh: false,
  }

  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middlewares = []
  middlewares.push(
    thunkMiddleware.withExtraArgument({
      apiProxy: api,
    }),
  )

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  let composeEnhancers = compose

  if (__DEV__) {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  store.unsubscribeHistory = browserHistory.listen(updateLocation(store))
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}

export default createStore
