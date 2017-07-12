import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from '../reducer'

const store = function(initialState) {
	let createStoreWithMiddleware;
	// if (process.env.NODE_ENV === 'production') {
	// 	createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
	// }else{
	// 	const logger = createLogger();
	// 	createStoreWithMiddleware = applyMiddleware(thunk,logger)(createStore);
	// }
	// let store = createStoreWithMiddleware(reducers, initialState);

	// createStoreWithMiddleware = applyMiddleware(thunk,logger)(createStore)
	// let store = createStoreWithMiddleware(reducers, initialState)
	let middlware;
	if( process.env.NODE_ENV === 'production' ){
		middlware = applyMiddleware(thunk)
	}else{
		middlware = applyMiddleware(thunk,createLogger())
	}

	let store = createStore(reducers,initialState,middlware)

	return store
}

export default store