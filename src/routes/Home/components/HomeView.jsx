import React, { Component } from 'react';
import StockContainer from '../containers/StockContainer';
import StockChartContainer from '../containers/StockChartContainer';
import StockControllerContainer from '../containers/StockControllerContainer';

import './HomeView.scss'

class HomeView extends Component {
  render() {
    return (
      <div className={'stocks--container'}>
        <StockControllerContainer/>
        <StockChartContainer/>
        <StockContainer/>
      </div>
    );
  }
}

export default HomeView;
