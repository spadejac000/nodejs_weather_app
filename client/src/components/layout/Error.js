import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getError} from '../../actions/weatherActions';

export class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
  }

  componentDidMount() {
    this.props.getError();
  }

  render() {
    return (
      <div>
        <p>City not Found!!!!!!!!</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  weather: state.weather
})

export default connect(mapStateToProps, {getError})(Error);
