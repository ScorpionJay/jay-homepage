/**
 * about component
 * 创建组件的几种方式
 * 1. 继承Component
 * 2. 函数（无状态组件，纯粹展示组件）
 */

import React from 'react'
import './about.scss'

// 函数
const AboutComtonent = () => (
	<div className='about'>
		<div className='lable'>About</div>
		<img src={require('../../image/header.png')} style={{ width:'16rem',borderRadius:'1rem' }}/>
		<div>
			<div className='row'>
				<div>Name</div>
				<div>Jay</div>
			</div>
			<div className='row'>
				<div>Gender</div>
				<div>Man</div>
			</div>
			<div className='row'>
				<div>Age</div>
				<div>18</div>
			</div>
			<div className='row'>
				<div>Interest</div>
				<div>Like coding. Like fitness.</div>
			</div>
			<div className='row'>
				<div>github</div>
				<div><a href='https://github.com/ScorpionJay' target='_blank'>ScorpionJay</a></div>
			</div>
			<div className='row'>
				<div>weibo</div>
				<div><a href='http://weibo.com/jay026' target='_blank'>jay026</a></div>
			</div>
			<div className='row'>
				<div>email</div>
				<div><a href="mailto:jay.wang.scorpion@gmail.com">jay.wang.scorpion@gmail.com</a></div>
			</div>
		</div>
	</div>
)

export default AboutComtonent

// 继承Component
// export default class About extends Component {

// 	render() {
// 		return (
// 			<div className='about'>
// 				<div className='lable'>About</div>
				
// 				<div>
// 					<div className='row'>
// 						<div>Name</div>
// 						<div>Jay</div>
// 					</div>
// 					<div className='row'>
// 						<div>Gender</div>
// 						<div>Man</div>
// 					</div>
// 					<div className='row'>
// 						<div>Age</div>
// 						<div>18</div>
// 					</div>
// 					<div className='row'>
// 						<div>Interest</div>
// 						<div>Like coding. Like fitness.</div>
// 					</div>
// 					<div className='row'>
// 						<div>github</div>
// 						<div><a href='https://github.com/ScorpionJay' target='_blank'>ScorpionJay</a></div>
// 					</div>
// 					<div className='row'>
// 						<div>weibo</div>
// 						<div><a href='http://weibo.com/jay026' target='_blank'>jay026</a></div>
// 					</div>
// 					<div className='row'>
// 						<div>email</div>
// 						<div><a href="mailto:jay.wang.scorpion@gmail.com">jay.wang.scorpion@gmail.com</a></div>
// 					</div>

// 				</div>

// 			</div>
// 		)
// 	}

// }
