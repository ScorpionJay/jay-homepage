import React,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Fade extends Component {

	render() {

		return (
			<ReactCSSTransitionGroup
				          transitionName="fade"
				          transitionAppear={true}
				          transitionAppearTimeout={300}
				          transitionEnterTimeout={300}
				          transitionLeaveTimeout={300}
				          transitionEnter={true}
				          transitionLeave={false}>
			
				         { this.props.children }

			</ReactCSSTransitionGroup>
		)
	}

}

