import React, { Component } from 'react';

class Location extends Component {
  render() {
    return (
      <div className="location">
        <h2 className="location__heading">Location</h2>
        <form className="location__form" id="location-selector">          
          <input className="location__input" type="radio" id="indoors" name="location" onChange={this.props.onChange} />
          <label className="location__label location__label--indoors" for="indoors">Indoors</label>         
          <input className="location__input" type="radio" id="outdoors" name="location" onChange={this.props.onChange} />
          <label className="location__label location__label--outdoors" for="outdoors">Outdoors</label>
        </form>
      </div>      
    );
  }
}

export default Location;