import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div className="container container__result">
        <button className="btn btn__calculate" onClick={this.props.onClick}>Calculate</button>
        <p className="para para__result">{this.props.result}</p>
      </div>
    );
  }
}

export default Result;