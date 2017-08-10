import React,{Component} from 'react'
import {render} from 'react-dom'
import App from './container/app'

import './scss/main.scss'

import { AppContainer } from 'react-hot-loader'

// render(
// 	<App name='react' />,
// 	document.getElementById('app')
// )

const renderIndex = () => {
  render(
  	<AppContainer>
		  <App/>
    </AppContainer>,
    document.getElementById('app')
  );
}

renderIndex(App)

if (module.hot) {
  module.hot.accept(() => renderIndex(Root));
}