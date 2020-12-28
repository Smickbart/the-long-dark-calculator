import React, { Component } from 'react';

class Item extends Component {
  render() {
    const { foodList } = this.props;
    return (
      <div className="container container__item">
        <div className="container container__item--list">
          <select className="select select__item" name="food" onChange={this.props.onChange}>
            <option>-- Select food --</option>
            {foodList.map((item) => {
              return <option key={item}>{item}</option>
            })}
          </select>
        </div>        
        <div className="container container__item--percentage">
          <label className="label label__percentage" for="startPercent">Starting Percentage:</label>
          <input className="input input__item" type="text" id="startPercent" name="percentage" onChange={this.props.onChange} /><span className="percent-symbol">%</span>
        </div>
      </div>
    )
  }
}

export default Item;