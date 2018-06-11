// ------------------------------------
// Actions
// ------------------------------------
import ActionTypes from './ActionTypes'

export const locationChange = (location = '/') => {
  return {
    type    : ActionTypes.LOCATION_CHANGE,
    payload : location
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({ dispatch }) => {
  return (nextLocation) => dispatch(locationChange(nextLocation))
}
