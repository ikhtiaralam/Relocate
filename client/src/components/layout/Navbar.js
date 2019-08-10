import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="nav-wrapper">
          <div className="">
            <Link
              to="/"
              style={{
                fontFamily: "Crimson Text"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="" />
              HOME
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
