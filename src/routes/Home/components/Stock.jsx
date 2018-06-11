import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditableCell from './EditableCell';

import './Stock.scss'

class Stock extends Component {
  static propTypes = {
    stocks: PropTypes.arrayOf(PropTypes.object),
    setStock: PropTypes.func,
  };

  static defaultProps = {
    stocks: [],
    setStock: (...params) => {
      console.log('Stock::setStock', params);
    },
  };

  render() {

    const tableStock = (
      <div className="table-responsive stocks--grid">
        <table className={'table table-bordered'}>
          <tbody>
          <tr key={'#'}>
            <th scope="row">#</th>
            {this.props.stocks.map(item => (<th key={item.id}>{item.id}</th>))}
          </tr>
          <tr key={'CAC40'}>
            <th scope="row">CAC40</th>
            {this.props.stocks.map(item => (
              <EditableCell
                setStock={this.props.setStock}
                key={item.id}
                value={item.CAC40}
                id={item.id}
                type={'CAC40'}/>
            ))}
          </tr>
          <tr key={'NASDAQ'}>
            <th scope="row">NASDAQ</th>
            {this.props.stocks.map(item => (
              <EditableCell
                setStock={this.props.setStock}
                key={item.id}
                value={item.NASDAQ}
                id={item.id}
                type={'NASDAQ'}/>
            ))}
          </tr>
          </tbody>
        </table>
      </div>
    );

    return (
      <div className={'stocks-table--container'}>
        {tableStock}
      </div>
    );
  }
}

export default Stock;
