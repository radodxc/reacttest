import React, { Component } from "react";
import 'uikit'

import './Grid.css'
import './Project.css'

export default class Project extends Component{

constructor(props) {
    super(props);

    this.state = { loading: true, projects: {} }
  }

  async componentDidMount() {
    let response = await fetch(`http://localhost:1337/projects/${this.props.match.params.id}`)
    let data = await response.json()
    this.setState({
      loading: false,
      projects: data
    })
  }


	render() {
		if (!this.state.loading) {
			
			var height = 100 / 3
		return(
			<div className="uk-container">
				<div className="uk-child-width-1-2@m" uk-grid="true">
			    <div>

			        <div className="uk-position-relative uk-visible-toggle uk-light" uk-slideshow="animation: push">

			            <ul className="uk-slideshow-items" style={{paddingTop: height+"%"}}>
			                <li>
			                   <img src="/images/bee-on-daisy.jpg" uk-cover="true"  />
			                </li>
			                <li>
			                	<img src="/images/bee-on-daisy.jpg" uk-cover="true" />
			                </li>
			                <li>
			                    <img src="/images/bee-on-daisy.jpg" uk-cover="true" />
			                </li> 
			            </ul>

			            <a className="uk-position-center-left uk-position-small uk-hidden-hover arrow" href="#" uk-slidenav-previous="true" uk-slideshow-item="previous" uk-icon="icon : chevron-left; ratio: 3.5"></a>
			            <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slideshow-item="next" uk-icon="icon : chevron-right; ratio: 3.5"></a>

			        </div>

			    </div>
			    <div><h2>dsdsadsa</h2></div>
				  
	    	</div>
	    </div>
		)
	}
	return (<h2>Waiting for API...</h2>);
}
}
