import React,{Component} from 'react'

import AboutComtonent from '../component/about/about'
import Fade from './fade'

export default class About extends Component {

	render() {
		return (
			<Fade>
				<AboutComtonent />
			</Fade>
		)
	}

}
