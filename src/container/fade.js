import React,{Component} from 'react'
import { CSSTransition,TransitionGroup } from 'react-transition-group'

// export default class Fade extends Component {
// 	render() {
// 		return (
// 			<TransitionGroup  >
// 				<CSSTransition
// 						  appear={true}
// 				          classNames="fade"
// 				          timeout={500}>
			
// 				         { this.props.children }
// 				</CSSTransition>

// 			</TransitionGroup>
// 		)
// 	}
// }

const  Fade = ({children}) => (
			<TransitionGroup  >
				<CSSTransition
					appear={true}
					classNames="fade"
					timeout={500}>
						 { children }
				</CSSTransition>
			</TransitionGroup>
)

export default Fade