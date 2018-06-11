import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './EditableCell.scss';

class EditableCell extends Component {
  static propTypes = {
    setStock: PropTypes.func.isRequired,
    value: PropTypes.number,
    type: PropTypes.string,
    id: PropTypes.number,

    isEditing: PropTypes.bool,

    labelClassName: PropTypes.string,
    inputClassName: PropTypes.string,
    inputMaxLength: PropTypes.number,
  };

  static defaultProps = {
    setStock: (...params) => {
      console.log('EditableCell::setStock', params);
    },
    value: 0,
    inputMaxLength: 100,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: this.fin(this.props.value),
      isEditing: this.props.isEditing || false,
      text: this.props.text || "",
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.value !== this.props.value) {
      this.setState({
        value: this.fin(newProps.value),
      })
    }
  }

  handleFocus() {
    if (this.state.isEditing) {
      this.setStock();
    }

    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  handleKeyPress(e) {
    if (e.keyCode === 13) {
      this.setState({
        isEditing: !this.state.isEditing,
      });
      this.setStock();
    }
  }

  handleChange() {
    this.setState({
      value: this.textInput.value,
    });
  }

  setStock() {
    this.props.setStock(
      {
        value: this.textInput.value,
        type: this.props.type,
        id: this.props.id,
      }
    )
  }

  fin(x) {
    return Number.parseFloat(x).toFixed(2);
  }

  render() {
    const cell = this.state.isEditing ? (
      <input type="text"
             className={this.props.inputClassName}
             ref={(input) => {
               this.textInput = input;
             }}
             value={this.state.value}
             onChange={this.handleChange}
             onKeyDown={this.handleKeyPress}
             onBlur={this.handleFocus}
             maxLength={this.props.inputMaxLength}
             autoFocus/>
    ) : (
      <span className={this.props.labelClassName}
            onClick={this.handleFocus}>
        {this.state.value}
      </span>
    );

    return (<td className={'inline-edit'}>{cell}</td>)
  }
}

export default EditableCell;
