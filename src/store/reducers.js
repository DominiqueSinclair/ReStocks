import { combineReducers } from 'redux'
import location from '../reducer/location'
import stock from '../reducer/stock'
import settings from '../reducer/settings'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location,
    stock,
    settings,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
