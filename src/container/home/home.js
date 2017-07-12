import React,{Component} from 'react'
import { connect } from 'react-redux'
import { swiperAction } from '../../action/home'

import Slider from '../../Component/slider/slider'

class Home extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	select:'Home'
	  };
	}

	componentDidMount(){
		const { dispatch } = this.props
    	dispatch(swiperAction([111111111]))
	}

	render() {

		return (
			<div className='home'>

				<Slider data={this.props.swiper} />

			</div>
		)
	}

}

// function map(state){
// 	return {
// 		swiper: state.home.swiper
// 	}
// }

const map = state => ({
	swiper: state.home.swiper
})

export default connect(map)(Home)
