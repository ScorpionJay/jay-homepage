import { combineReducers } from 'redux'

import home from './home'
import blog from './blog'

const reducers = combineReducers({
	home,blog
})

export default reducers