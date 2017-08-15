import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

import {Transition } from 'react-transition-group'

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

				<Transition timeout={500} in={true} appear={true}>
					{(status) => (
						<div  className={`logo  navFade navFade-${status}`}>Jay's Homepage </div>
					)}
				</Transition  >

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
