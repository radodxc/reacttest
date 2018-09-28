import React, { Component } from 'react';
import './App.css';


import Header from './Header'
import Grid from './Grid'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="uk-container">
          <Header />
         </div>
         <Grid />       	
      </div>
    );
  }
}

export default App;
