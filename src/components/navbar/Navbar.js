import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a className="navbar-brand" href="/">Personal Portfolio</a>
        <span>
          <a className="nav-link" href="#">Resume</a>
        </span>

        {/* <div className="collapse navbar-collapse">
          
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Resume</a>
            </li>
          </ul>
        </div> */}
      </nav>
    );
  }
}

export default Navbar;