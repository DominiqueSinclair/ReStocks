import ActionTypes from './ActionTypes'

export const setSettings = (data) => ({
  type: ActionTypes.SET_SETTINGS,
  data,
})

export const setAutoRefresh = (data) => ({
  type: ActionTypes.SET_AUTOREFRESH,
  data,
})
