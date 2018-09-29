import React from 'react'

class NavBar extends React.Component {
  render () {
    return (
      <div className="uk-width-2-3">
        <nav uk-navbar="true">
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li><a href="#">Projects</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )

  }
}

export default NavBar;
