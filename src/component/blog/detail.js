import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Remarkable from 'remarkable'

import './blog.scss'



export default class Blog extends Component{


	getRawMarkup(data) {
	    var md = new Remarkable();
	    return { __html: md.render(data) };
	  }

	render() {
		return (
			<div className='blog'>
				<div
		          className="content"
		          dangerouslySetInnerHTML={this.getRawMarkup(this.props.data)}
		        />
			</div>
		);
	}

}

