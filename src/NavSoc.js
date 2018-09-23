import React from 'react';
import uikit from 'uikit';
import './NavSoc.css'

class NavSoc extends React.Component {
  render() {
      return (
        <div className="uk-width-1-6">
          <nav>
            <div className="uk-navbar-right ">
            <ul className="uk-iconnav uk-navbar-nav logpad">
              <li><a href="#" uk-icon="icon: plus"></a></li>
              <li><a href="#" uk-icon="icon: copy"></a></li>
            </ul>
          </div>
          </nav>
        </div>
    )
  }


}
export default NavSoc;
