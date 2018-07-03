import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import Footer from './Footer'
import Advertisement from './Advertisement'
import Body from './Body'
import Clickbait from './Clickbait'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
          <Body />
          <Advertisement />
          <Clickbait />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
