import React from 'react'
import { render } from 'react-dom'

import './assets/style.scss'

const App = () => (
  <div className="App">
    <h1>Hello World</h1>
  </div>
)

render(<App />, document.getElementById('root'))
