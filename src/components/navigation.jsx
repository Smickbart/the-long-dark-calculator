import React, { Component } from 'react';

class navigation extends Component {
  render() {
    return (
      <nav className="nav">
        <input type="checkbox" id="navigation" name="navigation" className="nav__check" />  
        <label for="navigation" className="nav__btn">
          <div className="nav__hamburger"></div>
        </label>                  
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item"><a id="aboutLink" href="#popup" className="nav__link" onClick={this.props.onClick}>about</a></li>
            <li className="nav__item"><a id="contactLink" href="#popup" className="nav__link" onClick={this.props.onClick}>contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default navigation;