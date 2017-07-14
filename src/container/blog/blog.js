import React, {Component} from 'react'
import { connect } from 'react-redux'
import BlogComponent from '../../component/blog/blog'
import Fade from '../fade'
import {blogListAction} from '../../action/blog'

 class Blog extends Component{

	componentDidMount(){
		// console.log(this.props)
		// console.log(this.props.match.params)
		const {dispatch} = this.props
		dispatch(blogListAction())
	}


	render() {
		return (
			<Fade>
				<BlogComponent data={this.props.blogList} location={this.props.location} />
			</Fade>
		)
	}

}


// const Blog = () => (
//   <BlogComponent/>
// )

const map = state => ({
	blogList: state.blog.blogList
})

export default connect(map)(Blog)
