import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-info mb-5">
          <div className="container">
            <a className="navbar-brand" href="#">
              Weather App
            </a>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
