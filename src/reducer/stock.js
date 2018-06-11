import ActionTypes from '../actions/ActionTypes'

let newState

const stock = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.DONE_GET_STOCK:
      const stocks = Array.isArray(action.data) ? action.data : []
      newState = stocks.map((item, index) => {
        if (Array.isArray(state)) {
          if (state.length > index) {
            const CAC40 = state[index].CAC40locked ? state[index].CAC40 : item.stocks.CAC40
            const NASDAQ = state[index].NASDAQlocked ? state[index].NASDAQ : item.stocks.NASDAQ
            return {
              id: index,
              CAC40,
              NASDAQ,
              CAC40locked: state[index].CAC40locked,
              NASDAQlocked: state[index].NASDAQlocked,
            }
          } else {

          }
        } else {
          return {
            id: index,
            CAC40: item.stocks.CAC40,
            NASDAQ: item.stocks.NASDAQ,
            CAC40locked: false,
            NASDAQlocked: false,
          }
        }
      })
      return newState

    case ActionTypes.ERROR_GET_STOCK:
      newState = state.slice()
      return newState

    case ActionTypes.SET_STOCK:
      newState = state.slice()
      newState[action.data.id][action.data.type] = parseInt(action.data.value, 10)
      newState[action.data.id][`${action.data.type}locked`] = !!action.data.value
      return newState

    default:
      return state
  }
}

export default stock
