import React from 'react';
import {Link} from "react-router-dom"

import Project from "./Project"

import './Grid.css'

class Grid extends React.Component {


	constructor(props) {
	    super(props);

	    this.state = {
	      loading: false,
	      projects: []
	    }
	  }

	async componentDidMount() {
		let response = await fetch("http://localhost:1337/projects");
	    if (!response.ok) {
	      return
	    }

	    let projects = await response.json()
	    this.setState({ loading: true, projects: projects })
	}

  render() {
  	if (this.state.loading) {

  		var linkUrl = `projects/${this.state.projects[0].id}`;

			console.log(this.state.projects)
	    return(
		    <div className="uk-container">
			    <div className="uk-grid uk-grid-small" uk-grid="true" uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 500">
			    	{this.state.projects.map((item, index) => {
			    		var grid = item['Grid button'] ? 'uk-width-1-2' : 'uk-width-1-4',
			    				squareClass = item['Grid button'] ? 'img-wrap big-item' : 'img-wrap'

			    		return <div key={index} className={grid}>
					    		<Link to={linkUrl}>
							    	<div className={squareClass}>
							    		<div className="img-bg" style={{backgroundImage:`url(http://localhost:1337${item.Image.url})`}}></div>
							    		<div className="img-info">
							    			<h2>{item.Head}</h2>
							    		</div>
							    	</div>
							    </Link>
					    	</div>
			    	})}
			    		
					</div>
				</div>

	    )
		}

		return (<h2 className="ProductList-title">Waiting for API...</h2>);
  }
}

export default Grid;
