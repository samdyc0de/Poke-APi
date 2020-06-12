import React, { Component } from "react";
import facebook from "../images/facebook.png";
import git from "../images/git.png";
import tw from "../images/tw.png";
import lik from "../images/lik.png";

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small cyan darken-3 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-8 py-5">
              <div className="mb-5 flex-center">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/samueldavid.roncancio.bohorquez/"
                >
                  <i className=" mr-md-5 mr-3 fa-2x">
                    <img src={facebook} alt="icono" />
                  </i>
                </a>

                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/samdyc0de"
                >
                  <i className=" mr-md-5 mr-3 fa-2x">
                    <img src={git} alt="icono" />
                  </i>
                </a>

                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/samdyc0de"
                >
                  <i className=" mr-md-5 mr-3 fa-2x">
                    <img src={tw} alt="icono" />
                  </i>
                </a>

                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/samuel-david-roncancio"
                >
                  <i className=" mr-md-5 mr-3 fa-2x">
                    <img src={lik} alt="icono" />
                  </i>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <br /> <br />
              <a
                href="https://dev.to/samdyc0de"
                target="_blank "
                rel="noopener noreferrer"
                className="stretched-link btn btn-primary text-dark"
              >
                Samdyc0de
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
