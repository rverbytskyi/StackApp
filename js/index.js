import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import { saveUserCreds } from './utils/async.storage'
import userCreds from './config/user'

import AppWrapper from './containers/AppWrapper'
import Router from './router'

saveUserCreds(userCreds)

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
