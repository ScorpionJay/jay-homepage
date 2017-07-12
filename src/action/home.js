/**
* home action
*/

export const SWIPER = 'SWIPER'

// import json  from '../json/test.json'

import api from '../util/api'

const swiper = (obj) => {
	return {
			type:SWIPER,
			obj
	}
}

export function swiperAction(obj){
	return async dispatch =>{

		// console.log(json)
		let data = await api( "../json/test.json" )///ad/v1/mobile_fmbanner?&appid=1&clientver=1&clienttime=1&key=1 ///api/json/home.json

		dispatch(swiper(data.slider))
	}
}

// export const  swiperAction = obj => {
// 	return dispatch =>{
// 		dispatch(swiper(obj))
// 	}
// }