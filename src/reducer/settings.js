import ActionTypes from '../actions/ActionTypes'

let newState

const settings = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SET_SETTINGS:
      newState = { ...action.data }
      return newState

    case ActionTypes.SET_AUTOREFRESH:
      newState = { ...state }
      newState.autorefresh = action.data
      return newState

    default:
      return state
  }
}

export default settings
