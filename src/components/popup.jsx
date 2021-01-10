import React, { Component } from 'react';

class popup extends Component {
  render() {
    const { heading } = this.props;
    const text = heading === "about" ? "This calculator will convert your food item's condition from a percentage to a number of days." :
     "If you have found a bug or are having problems accessing or using the site please contact me at: stevenmbartholomew@gmail.com";
    return (
      <div id="popup" className="popup">
        <div className="popup__content">
          <h2 className="popup__heading u-margin-bottom-sml">{heading}</h2>
          <p className="popup__text">{text}</p>
          <a href="#app" className="popup__close">&#215;</a>
        </div>
      </div>
    );
  }
}

export default popup;