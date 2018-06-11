import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import './StockChart.scss'

class StockChart extends Component {
  static propTypes = {
    getStock: PropTypes.func,
    stocks: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    stocks: [],
  };

  render() {
    const stockChart = (
      <div className={'stocks-graph--container'}>
        <ResponsiveContainer>
          <LineChart width={600} height={300} data={this.props.stocks}
                     margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="id"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="CAC40" stroke="#8884d8" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="NASDAQ" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
    // const stockChart = (
    //   <div className={'stocks-graph--container'}>
    //     {/*<ResponsiveContainer>*/}
    //       <LineChart width={600} height={300}  data={data}
    //                  margin={{top: 5, right: 30, left: 20, bottom: 5}}>
    //         <XAxis dataKey="name"/>
    //         <YAxis/>
    //         <CartesianGrid strokeDasharray="3 3"/>
    //         <Tooltip/>
    //         <Legend />
    //         <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{r: 8}}/>
    //         <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    //       </LineChart>
    //     {/*</ResponsiveContainer>*/}
    //   </div>
    // );

    return stockChart;
  }
}

export default StockChart;
