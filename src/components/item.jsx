import React, { Component } from 'react';

class Item extends Component {
  render() {
    const { foodList } = this.props;
    return (
      <div className="item">
        <select className="item__list" name="food" onChange={this.props.onChange}>
          <option>-- Select food --</option>
          {foodList.map((item) => {
            return <option key={item}>{item}</option>
          })}
        </select>      
        <div className="item__percentage">
          <label className="item__label" for="startPercent">Starting Percentage: </label>
          <input className="item__input" type="text" id="startPercent" name="percentage" onChange={this.props.onChange} /><span className="item__symbol">%</span>
        </div>
      </div>
    )
  }
}

export default Item;