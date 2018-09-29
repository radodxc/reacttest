import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import { Link } from 'react-router-dom'
import './App.css';


import Header from './Header'
import Grid from './Grid'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="uk-container">
          <Header />
            <Switch>
              // <Route path="/" exact component={Grid} />
              <Route path="/projects/:id" component={Grid} />
            </Switch>
         </div>
         <Grid />       	
      </div>
    );
  }
}

export default App;
