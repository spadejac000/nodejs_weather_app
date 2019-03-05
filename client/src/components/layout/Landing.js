import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getWeather} from '../../actions/weatherActions';
import PropTypes from 'prop-types';

class Landing extends Component {

  componentDidMount() {
    this.props.getWeather();
  }

  render() {
    const {weather} = this.props.weather;
    console.log(weather.weather)
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
              <h1>{weather.icon}</h1>
              <h2>City: {weather.city}</h2>
              <h3>Temperature: {weather.temperature}</h3>
              <h3>Description: {weather.description}</h3>
          </div>
        </div>

      </div>
    )
  }
}

Landing.propTypes = {
  getWeather: PropTypes.func.isRequired,
  weather: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  weather: state.weather
})

export default connect(mapStateToProps, {getWeather})(Landing);
