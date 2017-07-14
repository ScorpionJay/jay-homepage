import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

import './nav.scss'

export default class Nav extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	nav :false
	  };
	}


	showMenu(){
        this.setState({nav:!this.state.nav})
    }

    /*
    *<NavLink  to='/traning' activeClassName="active">
						Traning
					</NavLink>
					<NavLink  to='/gallery' activeClassName="active">
						Gallery
					</NavLink>
    */

	render() {
		return (
			<div className='nav'>

			<div className='nav-menu'>

				<ReactCSSTransitionGroup
		          transitionName="navFade"
		          transitionAppear={true}
			      transitionAppearTimeout={500}
			      transitionEnter={false}
			      transitionLeave={false}>
		          	<div className='logo'>Jay's Homepage </div>
		        </ReactCSSTransitionGroup>
				

				<div className='icon' onClick={ this.showMenu.bind(this) }>&#9776;</div>
			</div>
				<div className={this.state.nav? 'link' : 'link responsive' } onClick={ this.showMenu.bind(this) } >
					<NavLink exact to='/' activeClassName="active" >
						Home
					</NavLink>
					
					<NavLink  to='/blog' activeClassName="active">
						Blog
					</NavLink>
					<NavLink  to='/about' activeClassName="active">
						About
					</NavLink>		
				</div>

			</div>
		)
	}

}
