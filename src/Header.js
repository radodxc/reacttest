import React, { Component } from 'react';
import './Header.css';

import './uikit.min.css'

import Logo from './Logo'
import NavBar from './Nav'
import NavSoc from './NavSoc'

export default class Header extends Component {
  render() {
    return(
      <header>
        <div className="uk-grid uk-grid-small">
            <Logo />
            <NavBar />
            <NavSoc/>
        </div>
      </header>
    )
  }
}
