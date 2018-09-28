import React from 'react';
import uikit from 'uikit';

import './Grid.css'

class Grid extends React.Component {
  render() {
    return(
	    <div className="uk-container">
		    <div className="uk-grid uk-grid-small" uk-grid="true">
		    	<div className="uk-width-1-4">
			    	<div className="img-wrap">
			    		<div className="img-bg" style={{backgroundImage:"url('images/bee-on-daisy.jpg')"}}></div>
			    		<div className="img-info">
			    			<h2>Name space</h2>
			    		</div>
			    	</div>
		    	</div>
		    	<div className="uk-width-1-2">
			    	<div className="img-wrap  big-item">
			    		<div className="img-bg" style={{backgroundImage:"url('images/bee-on-daisy.jpg')"}}></div>
			    		<div className="img-info">
			    			<h2>Name space</h2>
			    		</div>
			    	</div>
		    	</div>
		    	<div className="uk-width-1-4">
			    	<div className="img-wrap">
			    		<div className="img-bg" style={{backgroundImage:"url('images/bee-on-daisy.jpg')"}}></div>
			    		<div className="img-info">
			    			<h2>Name space</h2>
			    		</div>
			    	</div>
		    	</div>
		    	<div className="uk-width-1-4">
			    	<div className="img-wrap">
			    		<div className="img-bg" style={{backgroundImage:"url('images/bee-on-daisy.jpg')"}}></div>
			    		<div className="img-info">
			    			<h2>Name space</h2>
			    		</div>
			    	</div>
		    	</div>
		    	<div className="uk-width-1-4">
			    	<div className="img-wrap">
			    		<div className="img-bg" style={{backgroundImage:"url('images/bee-on-daisy.jpg')"}}></div>
			    		<div className="img-info">
			    			<h2>Name space</h2>
			    		</div>
			    	</div>
		    	</div>
		    	<div className="uk-width-1-4">
			    	<div className="img-wrap">
			    		<div className="img-bg" style={{backgroundImage:"url('images/bee-on-daisy.jpg')"}}></div>
			    		<div className="img-info">
			    			<h2>Name space</h2>
			    		</div>
			    	</div>
		    	</div>
		    	<div className="uk-width-1-4">
			    	<div className="img-wrap">
			    		<div className="img-bg" style={{backgroundImage:"url('images/bee-on-daisy.jpg')"}}></div>
			    		<div className="img-info">
			    			<h2>Name space</h2>
			    		</div>
			    	</div>
		    	</div>
		    	<div className="uk-width-1-4">
			    	<div className="img-wrap">
			    		<div className="img-bg" style={{backgroundImage:"url('images/bee-on-daisy.jpg')"}}></div>
			    		<div className="img-info">
			    			<h2>Name space</h2>
			    		</div>
			    	</div>
		    	</div>
				</div>

			</div>
    )
  }
}

export default Grid;
