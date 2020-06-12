import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav bg-dark position-sticky sticky-top ">
        <Link className="nav-link text-white " to="/">
          Home
        </Link>
        <Link className="nav-link  text-white" to="/Poke">
          Cards
        </Link>
      </div>
    );
  }
}
