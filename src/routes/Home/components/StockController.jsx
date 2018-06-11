import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IoAndroidDownload, IoRefresh } from 'react-icons/lib/io';

import './StockController.scss';

class StockController extends Component {
  static propTypes = {
    getStock: PropTypes.func,
    setAutoRefresh: PropTypes.func,
    stocks: PropTypes.arrayOf(PropTypes.object),
    settings: PropTypes.any,
  };

  static defaultProps = {
    settings: {
      counter: 20,
      interval: 1000,
      autorefresh: false,
    },
    stocks: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      autorefresh: this.props.settings.autorefresh,
      timer: 0,
      counter: this.props.settings.counter,
    };

    this.handleClickStart = this.handleClickStart.bind(this);
    this.handleClickStop = this.handleClickStop.bind(this);
    this.handleClickGetStock = this.handleClickGetStock.bind(this);
  }

  componentDidMount() {
    this.props.getStock(this.props.settings.counter);
    if (this.props.settings.autorefresh) {
      const intervalId = setInterval(this.autoRefresh.bind(this), this.props.settings.interval);
      // store intervalId in the state so it can be accessed later:
      this.setState({intervalId: intervalId});
    }
  }

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
  }

  autoRefresh() {
    this.props.getStock(this.props.settings.counter);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.settings.autorefresh !== this.state.autorefresh) {
      this.setState({ autorefresh: nextProps.settings.autorefresh });
      if (nextProps.settings.autorefresh) {
        this.props.getStock(this.props.settings.counter);
        const intervalId = setInterval(this.autoRefresh.bind(this), nextProps.settings.interval);
        // store intervalId in the state so it can be accessed later:
        this.setState({intervalId: intervalId});
      } else {
        clearInterval(this.state.intervalId);
      }
    }
  }

  handleClickStart(e) {
    e.preventDefault();
    this.props.setAutoRefresh(true);
  }

  handleClickStop(e) {
    e.preventDefault();
    this.props.setAutoRefresh(false);
  }

  handleClickGetStock(e) {
    e.preventDefault();
    this.props.getStock(this.props.settings.counter);
  }

  render() {
    const autorefreshBtn = this.props.settings.autorefresh ? (
      <button className='btn btn-outline-primary autorefresh btn-sm' onClick={this.handleClickStop}>
        Disable auto-refresh <IoRefresh/>
      </button>) : (
      <button className='btn btn-outline-primary autorefresh btn-sm'
              onClick={this.handleClickStart}>
        Enable auto-refresh <IoRefresh/>
      </button>);

    const refreshBtn = (
      <button className='btn btn-outline-primary refresh btn-sm' onClick={this.handleClickGetStock}>
        Get Stock <IoAndroidDownload/>
      </button>
    );

    return (
      <div className={'stocks-controller--container'}>
        {refreshBtn}
        {autorefreshBtn}
      </div>
    );
  }
}

export default StockController;
