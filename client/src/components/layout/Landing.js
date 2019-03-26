import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getWeather} from '../../actions/weatherActions';
import PropTypes from 'prop-types';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
  }

  componentDidMount() {
    this.props.getWeather();
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const {weather} = this.props.weather;
    const {city} = this.state;
    let iconurl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div className="the-content">
        <form action="/get-city" method="POST">
          <div className="input-group mb-3">
            <input 
              name="city"
              type="text" 
              className="form-control" 
              placeholder="City Name..." 
              aria-label="Recipient's username" aria-describedby="basic-addon2"
              value={city}
              onChange={this.onChange}
            />

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
              <img src={iconurl} alt=""/>
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
