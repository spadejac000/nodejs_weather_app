import React, { Component } from 'react'

class Landing extends Component {
  render() {
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
                onclick="showCity" 
                className="btn btn-info mb-2 text-light"
              >
                Check City
              </button>
            </div>

          </div>

        </form>

        <div className="card">
          <div className="card-body">
            <img src="http://openweathermap.org/img/w/<%= weather.icon %>.png" />
            <h2>City: city</h2>
            <h3>Temperature: temp</h3>
            <h3>Description: desc</h3>
          </div>
        </div>

      </div>
    )
  }
}

export default Landing;
