import React, {Component} from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  
}

export class Provider extends Component {
  state = {
    weather: {
      image: 'Poop',
      city: 'Los Angeles',
      temp: '75 degrees',
      desc: 'It is sunny'
    } 
  }

  componentDidMount() {
    console.log('componentDidMount...');
    axios.get('http://localhost:8000')
      .then(response => response.json())
      .then(json => console.log(json));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;