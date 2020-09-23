import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import App from './components/App/App'
import { BrowserRouter } from 'react-router-dom'

console.log('PUBLIC_URL', process.env.PUBLIC_URL)
const appJsx = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
