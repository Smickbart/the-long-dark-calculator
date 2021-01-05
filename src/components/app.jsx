import React, { Component } from 'react';
import Item from "./item";
import Difficulty from "./difficulty";
import Location from "./location";
import Result from "./result";
import foodDecay from "../data/foodDecay.json"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "food": "",
      "percentage": undefined,
      "difficulty": undefined,
      "location": undefined,
      "result": undefined
    }
  }

  handleError = (message) => {
    const error = document.getElementById("error");

    error.innerHTML = message;
    error.classList.remove("hidden");
  }

  handleChange = (e) => {
    const name = e.target.name;
    let value = name === "percentage" || name === "difficulty" ? Number(e.target.value) : e.target.value;
    const id = e.target.id;
    const error = document.getElementById("error");    

    error.classList.add("hidden");

    console.log("name = "+name,"value = "+value)

    const params = {
      "food": this.state.food,
      "percentage": this.state.percentage,
      "difficulty": this.state.difficulty,
      "location": this.state.location,
    }

    // error handling
    if(value === "-- Select food --"){
      this.handleError("You haven't selected a food item.");
      params[name] = value;
    }else if(name === "location" && !params.food){
      this.handleError("Please select a food item before choosing it's location.");
      document.getElementById("indoors").checked = false;
      document.getElementById("outdoors").checked = false;
    }else if(name === "location" && params.food){
      const food = foodDecay.find(item => item.food === params.food);
      value = Number(food[id]);
      params[name] = value;
    }else if(name === "food" && value){
      params[name] = value;
      const food = foodDecay.find(item => item.food === params.food);
      if(document.getElementById("indoors").checked){
      params["location"] = Number(food["indoors"]);
      }else if(document.getElementById("outdoors").checked){
        params["location"] = Number(food["outdoors"]);
      }
    }else {
      params[name] = value;
    }    

    this.setState(state => state = params);
  }

  handleClick = (e) => {
    const percentage = this.state.percentage;
    const difficulty = this.state.difficulty;
    const location = this.state.location;
    const result = Math.floor(percentage / (difficulty * location));
    const food = this.state.food;

    console.log(location);

    //error handling
    if(food === "-- Select food --"){
      this.handleError("You haven't selected a food item.");
      this.setState(state => state.result = "");
    } else if(!result){
      if(!percentage){
        this.handleError("Please enter the percentage of your item.");
      }else if(!difficulty) {
        this.handleError("Please choose your difficulty level.");
      }else if(!location){
        this.handleError("Please choose the location you've stored the item.");
      }else if(result === 0){
        this.setState(state => state.result = result + " days");
      }
    }else{
      this.setState(state => state.result = result + " days");
    }
  }

  render() {
    const foodList = foodDecay.map(item => item.food);

    return (
      <div className="app">
        <header className="header">
          <h1 className="header__heading">Food Decay <span className="header__span">Calculator</span></h1>
        </header>
        <nav className="nav">
          <input type="checkbox" id="navigation" name="navigation" className="nav__check" />  
          <label for="navigation" className="nav__btn">
            <div className="nav__hamburger"></div>
          </label>                  
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item"><a className="nav__link">about</a></li>
              <li className="nav__item"><a className="nav__link">contact</a></li>
            </ul>
          </div>
        </nav>
        <main className="main">
          <div className="info-box">
            <p className="info-box__text">
              
            </p>
          </div>
          <p className="para para__error hidden" id="error"></p>
          <Item 
            foodList={foodList}
            onChange={this.handleChange}
          />
          <Difficulty 
            onChange={this.handleChange}
          />
          <Location 
            onChange={this.handleChange}
          />
          <Result 
            result={this.state.result}
            onClick={this.handleClick}
          />
        </main>
      </div>
    );
  }
}

export default App;
