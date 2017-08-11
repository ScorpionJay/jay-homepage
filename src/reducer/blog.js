import { combineReducers } from 'redux'
import { BLOGLIST,BLOGDETAIL } from '../action/blog'


// function swiper( state=[1],action ){
// 	switch(action.type) {
// 		case SWIPER:
// 			return [...action.obj]
// 			break;
// 		default :
// 			return state
// 	}
// }

const blogListVo = [{
	"title": "",
}]

const blogList = ( state=blogListVo,action ) => {
	switch(action.type) {
		case BLOGLIST:
			return [...action.obj]
			break;
		default :
			return state
	}
}

const blogDetail = ( state="",action ) => {
	switch(action.type) {
		case BLOGDETAIL:
			return action.obj
			break;
		default :
			return state
	}
}

const blog = combineReducers({
	blogList,blogDetail
})

export default blog