import ActionTypes from './ActionTypes'

export const startGetStock = () => ({
  type: ActionTypes.START_GET_STOCK,
})

export const doneGetStock = (data) => ({
  type: ActionTypes.DONE_GET_STOCK,
  data,
})

export const errorGetStock = (error) => ({
  type: ActionTypes.ERROR_GET_STOCK,
  error,
})

export const getStock = (counter) => (dispatch, getState, options) => {
  dispatch(startGetStock())
  const apiProxy = options.apiProxy
  const params = Object.assign({ counter }, options)

  apiProxy.getStock(params)
    .then(data => dispatch(doneGetStock(data)))
    .catch(error => dispatch(errorGetStock(error)))
}

export const setStock = (data) => ({
  type: ActionTypes.SET_STOCK,
  data,
})

export const setStocks = (data) => ({
  type: ActionTypes.SET_STOCKS,
  data,
})
