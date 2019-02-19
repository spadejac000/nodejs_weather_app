import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Overlay from './components/layout/Overlay';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Overlay />
        <Navbar />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
