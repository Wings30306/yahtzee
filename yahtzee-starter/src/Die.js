import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.handleClick(this.props.idx)
  }

  render() {
    const numberWords = ["one", "two", "three", "four", "five", "six"]
    return (
      <i
        className={`Die fas fa-3x fa-dice-${numberWords[this.props.val - 1]} ${this.props.locked ? "Die-locked" : this.props.rolling && "Die-rolling"}`}
        onClick={this.handleClick}
      ></i>
    );
  }
}

export default Die;
