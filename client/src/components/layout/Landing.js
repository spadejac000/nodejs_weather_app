import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getWeather} from '../../actions/weatherActions';

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
                      className="btn btn-info mb-2 text-light"
                    >
                      Check City
                    </button>
                  </div>
      
                </div>
      
              </form>
      
              <div className="card">
                <div className="card-body">
                    <h1></h1>
                    <h2>City:</h2>
                    <h3>Temperature:</h3>
                    <h3>Description:</h3>
                </div>
              </div>
      
            </div>
          )
  }
}

const mapStateToProps = (state) => ({
  weather: state.weather
})

export default connect(mapStateToProps, {getWeather})(Landing);
