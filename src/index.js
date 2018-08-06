import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './components/App'
import CssBaseline from '@material-ui/core/CssBaseline'

import 'typeface-roboto'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <React.Fragment>
      <CssBaseline />
      <App />
    </React.Fragment>
  </Provider>,
  target
)
