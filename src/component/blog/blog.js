import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './blog.scss'

export default class Blog extends Component{

	render() {
		const data = this.props.data
		// console.log(this.props)
		return (
			<div className='blog'>
				{
					data.map( (obj,index) => <Item key={index} data={obj} location={this.props.location} /> )
				}
			</div>
		);
	}

}

class Item extends Component{
	render() {
		return (
				<Link className='item' to={this.props.location.pathname +'/'+ this.props.data.url} >
					<div>{this.props.data.title}</div>
				</Link>
		);
	}
}