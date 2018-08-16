import { fork, all } from 'redux-saga/effects'
import { apiHandlerSaga } from './api'

export default function* () {
  yield all([
    fork(apiHandlerSaga),
  ])
}
