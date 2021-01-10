import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div className="result">
        <button className="result__btn" onClick={this.props.onClick}>Calculate</button>
        <p className="result__text">{this.props.result}</p>
      </div>
    );
  }
}

export default Result;