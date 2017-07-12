/**
* blog action
*/

export const BLOGLIST = 'BLOGLIST'
export const BLOGDETAIL = 'BLOGDETAIL'

import api from '../util/api'

const blogList = (obj) => {
	return {
			type:BLOGLIST,
			obj
	}
}

export function blogListAction(obj){
	return async dispatch =>{
		let data = await api( "../json/blog.json" )///ad/v1/mobile_fmbanner?&appid=1&clientver=1&clienttime=1&key=1 ///api/json/home.json
		dispatch(blogList(data))
	}
}

const blogDetail = (obj) => {
	return {
			type:BLOGDETAIL,
			obj
	}
}

export function blogDetailAction(obj){
	return async dispatch =>{
		let data = await api( "../json/blog/"+ obj + '.md','get',{},{'Content-Type':'text/html','Accept':'text/html'} )
		dispatch(blogDetail(data))
	}
}

// export const  swiperAction = obj => {
// 	return dispatch =>{
// 		dispatch(swiper(obj))
// 	}
// }