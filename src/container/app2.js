/**
 * app.js的备份，没有使用代码分割
 */

import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import {HashRouter as Router,Route,Switch} from 'react-router-dom'

import Nav from '../component/nav/nav'
import Home from './home/home'
import Blog from './blog/blog'
import BlogDetail from './blog/detail'
import About from './about'

import { Provider } from 'react-redux'
import configureStore from '../store'
const store = configureStore()

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class App extends Component {

	render() {
		return (
 			<Provider store={store}>
 					
				   <Router>
				      <Route render={({ location }) => (
				        <ReactCSSTransitionGroup
				          transitionName="fade"
				          transitionAppear={true}
				          transitionAppearTimeout={300}
				          transitionEnterTimeout={300}
				          transitionLeaveTimeout={300}
				          transitionEnter={true}
				          transitionLeave={false}>
				          <Nav/>
				          <Switch key={location.key} location={location}>
					           	<Route exact path='/' component={Home} />
								<Route path='/traning' component={Home} />
								<Route path='/gallery' component={Home} />
								<Route exact path='/blog' component={Blog}/>
								<Route exact path='/blog/:link' component={BlogDetail}/>
								<Route path='/about' component={About}/>
								<Route render={()=><p>404</p>} />
				          </Switch>
				        </ReactCSSTransitionGroup>
				      )}/>
				    </Router>
			</Provider>
		)
	}

}
