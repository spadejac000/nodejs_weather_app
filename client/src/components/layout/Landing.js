import React, { Component } from 'react';
import axios from 'axios';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      weather:
        {
          image: 'Poop',
          city: 'Los Angeles',
          temp: '75 degrees',
          desc: 'It is sunny'
        } 
    }
  }

  render() {
    const {weather} = this.state;
    return (
      <div className="the-content">

        <form action="/" method="GET">

          <div className="input-group mb-3">
            <input 
              name="cityName"
              type="text" 
              className="form-control" 
              placeholder="City Name..." 
              aria-label="Recipient's username" aria-describedby="basic-addon2"
            ></input>

            <div className="input-group-append">
              <button 
                type="submit"
                className="btn btn-info mb-2 text-light"
              >
                Check City
              </button>
            </div>

          </div>

        </form>

        <div className="card">
          <div className="card-body">
              <h1>{weather.image}</h1>
              <h2>City: {weather.city}</h2>
              <h3>Temperature: {weather.temp}</h3>
              <h3>Description: {weather.desc}</h3>
          </div>
        </div>

      </div>
    )
  }
}

export default Landing;
