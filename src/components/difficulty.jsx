import React, { Component } from 'react';

class Difficulty extends Component {
  render() {
    return (
      <div className="container container__difficulty">
        <h2 className="heading">difficulty</h2>
        <form className="form form__difficulty" id="difficulty-selector">
          <div className="container container__difficulty--split">
            <input className="input input__difficulty" type="radio" id="pilgrim" name="difficulty" value="0.25" onChange={this.props.onChange} />
            <label className="label label__difficulty label__difficulty--pilgrim" for="pilgrim">Pilgrim</label>
            <input className="input input__difficulty" type="radio" id="voyageur" name="difficulty" value="0.8" onChange={this.props.onChange} />
            <label className="label label__difficulty label__difficulty--voyageur" for="voyageur">Voyaguer</label>
          </div>
          <div className="container container__difficulty--split">            
            <input className="input input__difficulty" type="radio" id="stalker" name="difficulty" value="1" onChange={this.props.onChange} />
            <label className="label label__difficulty label__difficulty--stalker" for="stalker">Stalker</label>            
            <input className="input input__difficulty" type="radio" id="interloper" name="difficulty" value="2" onChange={this.props.onChange} />
            <label className="label label__difficulty label__difficulty--interloper" for="interloper">Interloper</label>
          </div>    
        </form>
      </div>
    );
  }
}

export default Difficulty;