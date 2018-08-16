import { fork, all } from 'redux-saga/effects'
import { apiHandlerSaga } from './api'
import { stackoverflowDataSaga } from './stackoverflow'

export default function* () {
  yield all([
    fork(apiHandlerSaga),
    fork(stackoverflowDataSaga),
  ])
}
