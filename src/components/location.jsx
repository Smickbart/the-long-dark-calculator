import React, { Component } from 'react';

class Location extends Component {
  render() {
    return (
      <div className="container container__location">
      <h2 className="heading">Location</h2>
        <form className="form form__location" id="location-selector">          
          <input className="input input__location" type="radio" id="indoors" name="location" onChange={this.props.onChange} />
          <label className="label label__location label__location--indoors" for="indoors">Indoors</label>         
          <input className="input input__location" type="radio" id="outdoors" name="location" onChange={this.props.onChange} />
          <label className="label label__location label__location--outdoors" for="outdoors">Outdoors</label>
        </form>
      </div>      
    );
  }
}

export default Location;