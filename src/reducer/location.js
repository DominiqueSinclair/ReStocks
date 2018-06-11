import browserHistory from 'react-router/lib/browserHistory'
import ActionTypes from '../actions/ActionTypes'

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = browserHistory.getCurrentLocation()
export default function location (state = initialState, action) {
  return action.type === ActionTypes.LOCATION_CHANGE
    ? action.payload
    : state
}
