import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

import {Provider} from './context';

import Navbar from './components/layout/Navbar';
import Overlay from './components/layout/Overlay';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

class App extends Component {

  // componentDidMount() {
  //   axios.get('http://localhost8000')
  //     .then(res => {
  //       this.setState({
  //         weather: 'poop'
  //       })
  //     })
  // };
  
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     data: null,
  //   };
  // }

  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Overlay />
            <Navbar />
            <Landing temp={'75 degrees'} desc={"It is sunny"} city={"Los Angeles"} image={"poop"} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
