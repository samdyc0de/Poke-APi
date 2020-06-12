import React, { Component } from "react";
import logo from "../images/images.png";
import ball from "../images/ball.png";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            className="animate__heartBea"
            alt="logo"
            src={logo}
            width="400"
          />

          <Link className="App-link animate__tada   " to="/Poke">
            <img src={ball} alt="ola" width="100" />
          </Link>
        </header>
      </div>
    );
  }
}
