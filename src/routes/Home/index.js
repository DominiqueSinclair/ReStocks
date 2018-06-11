export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Home = require('./components/HomeView').default
      // const stock = require('../../reducer/stock').default
      //
      // /*  Add the reducer to the store on key 'counter'  */
      // injectReducer(store, { key: 'stock', stock });

      /*  Return getComponent   */
      cb(null, Home)

      /* Webpack named bundle   */
    }, 'home')
  }
})
