import React, {Component} from 'react'
import { connect } from 'react-redux'
import Detail from '../../component/blog/detail'
import Fade from '../fade'
import {blogDetailAction} from '../../action/blog'

 class Blog extends Component{

	componentDidMount(){
		// console.log(this.props)
		// console.log('111',this.props)
		const {dispatch} = this.props
		dispatch(blogDetailAction(this.props.match.params.link))
	}


	render() {
		return (
			<Fade>
				<Detail data={this.props.blogDetail} location={this.props.location} />
			</Fade>
		)
	}

}


// const Blog = () => (
//   <BlogComponent/>
// )

const map = state => ({
	blogDetail: state.blog.blogDetail
})

export default connect(map)(Blog)
