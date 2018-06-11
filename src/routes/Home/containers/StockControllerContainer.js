import { connect } from 'react-redux'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the settings:   */

import StockController from '../components/StockController'
import { getStock } from '../../../actions/stock'
import { setAutoRefresh } from '../../../actions/settings'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = dispatch => ({
  getStock : (counter) => dispatch(getStock(counter)),
  setAutoRefresh : (state) => dispatch(setAutoRefresh(state)),
})

const mapStateToProps = (state) => {
  const stocks = Array.isArray(state.stock) ? state.stock : []

  return {
    stocks,
    settings : state.settings,
  }
}

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const settings = (state) => state.settings
    const tripleCount = createSelector(settings, (count) => count * 3)
    const mapStateToProps = (state) => ({
      settings: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(StockController)
