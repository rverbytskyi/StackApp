import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

import AppWrapper from './containers/AppWrapper'
import Router from './router'

export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWrapper>
          <Router />
        </AppWrapper>
      </Provider>
    )
  }
}
