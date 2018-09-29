import React, { Component } from 'react';
import {Link} from "react-router-dom"
import { Route, Switch } from "react-router";
import './App.css';


import Header from './Header'
import Grid from './Grid'
import Project from './Project'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="uk-container">
          <Header />
         </div>
         <Switch>
            <Route path="/" exact component={Grid} />
            <Route path="/projects/:id" component={Project} />
          </Switch>
      </div>
    );
  }
}

export default App;
