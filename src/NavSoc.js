import React from 'react';
import uikit from 'uikit';
import './NavSoc.css'

class NavSoc extends React.Component {
  render() {
      return (
        <div className="uk-width-1-10">
          <nav uk-navbar="true">
            <div className="uk-navbar-right">
              <ul className="uk-iconnav uk-navbar-nav logpad">
                <li><a href="#" uk-icon="icon: facebook"></a></li>
                <li><a href="#" uk-icon="icon: mail"></a></li>
              </ul>
            </div>
          </nav>
        </div>
    )
  }


}
export default NavSoc;


