import React, { Component } from 'react';

class Difficulty extends Component {
  render() {
    return (
      <div className="difficulty">
        <h2 className="difficulty__heading">difficulty</h2>
        <form className="difficulty__form" id="difficulty-selector">
          <div className="difficulty__buttons difficulty__buttons--top">
            <input className="difficulty__input" type="radio" id="pilgrim" name="difficulty" value="0.25" onChange={this.props.onChange} />
            <label className="difficulty__label difficulty__label--pilgrim" for="pilgrim">Pilgrim</label>
            <input className="difficulty__input" type="radio" id="voyageur" name="difficulty" value="0.8" onChange={this.props.onChange} />
            <label className="difficulty__label difficulty__label--voyageur" for="voyageur">Voyaguer</label>
          </div>
          <div className="difficulty__buttons difficulty__buttons--bottom">            
            <input className="difficulty__input" type="radio" id="stalker" name="difficulty" value="1" onChange={this.props.onChange} />
            <label className="difficulty__label difficulty__label--stalker" for="stalker">Stalker</label>            
            <input className="difficulty__input" type="radio" id="interloper" name="difficulty" value="2" onChange={this.props.onChange} />
            <label className="difficulty__label difficulty__label--interloper" for="interloper">Interloper</label>
          </div>    
        </form>
      </div>
    );
  }
}

export default Difficulty;