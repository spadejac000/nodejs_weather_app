import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Overlay from './components/layout/Overlay';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Overlay />
            <Navbar />
            <Landing />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
