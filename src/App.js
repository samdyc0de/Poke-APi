import React, { Fragment } from "react";
import Poke from "./components/Poke";
import Nav from "./containers/Nav";
import Footer from "./containers/Footer";
import Home from "./containers/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <Fragment>
      <Router>
        <Nav />
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/Poke" component={Poke} />
        </div>

        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
