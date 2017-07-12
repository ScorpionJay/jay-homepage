import React,{Component} from 'react'
// import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'

import Nav from '../component/nav/nav'

import { Provider } from 'react-redux'
import configureStore from '../store'
const store = configureStore()

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import loadHome from 'bundle-loader?lazy&name=[name]!./home/home'
import loadAbout from 'bundle-loader?lazy&name=[name]!./about'
import loadBlog from 'bundle-loader?lazy&name=[name]!./blog/blog'
import loadBlogDetail from 'bundle-loader?lazy&name=[name]!./blog/detail'

import Bundle from '../component/bundle'

// components load their module for initial visit
const Home = () => (
  <Bundle load={loadHome}>
    {(Home) => <Home/>}
  </Bundle>
)

const About = () => (
  <Bundle load={loadAbout}>
    {(About) => <About/>}
  </Bundle>
)

const Blog = (match) => (
  <Bundle load={loadBlog}>
    {(Blog) => <Blog {...match}/>}
  </Bundle>
)

const BlogDetail = (match) => (
  <Bundle load={loadBlogDetail} >
    {(BlogDetail) => <BlogDetail {...match}/>}
  </Bundle>
)


export default class App extends Component {

	// componentDidMount() {
	//     // preloads the rest
	//     loadHome(() => {})
	//     loadAbout(() => {})
	//     loadBlog(() => {})
	//     loadBlogDetail(() => {})
	// }

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
					           	<Route exact path='/' component={Home} key={'/'}/>
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
