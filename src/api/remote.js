import axios from 'axios'
import Endpoint from './endpoint'

const restConfig = require('./o2t-api-config.json')

const getCommonOptions = (url, params, method, data) => {
  const headers = {
    Accept: 'application/json; charset=utf-8',
  }

  return {
    method: method || 'get',
    url,
    data,
    params: {
      count: params.count || 20,
    },
    headers,
  }
}

const getStock = (params) => {
  const url = `${restConfig.baseURL}${Endpoint.GET_STOCK}`

  return axios(getCommonOptions(url, params))
    .then(res => Promise.resolve(res.data))
    .catch(err => Promise.reject(err))
}

export default {
  getStock,
  Endpoint,
}
