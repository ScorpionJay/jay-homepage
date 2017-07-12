import { combineReducers } from 'redux'
import { SWIPER } from '../action/home'


// function swiper( state=[1],action ){
// 	switch(action.type) {
// 		case SWIPER:
// 			return [...action.obj]
// 			break;
// 		default :
// 			return state
// 	}
// }

const sliderData = [{
	"link": "http://stackoverflow.com/",
	"img": ""
}]

const swiper = ( state=sliderData,action ) => {
	switch(action.type) {
		case SWIPER:
			return [...action.obj]
			break;
		default :
			return state
	}
}

const home = combineReducers({
	swiper
})

export default home