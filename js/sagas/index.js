import { fork, all } from 'redux-saga/effects'
import { connectionHandlerSaga } from './api'
import { stackoverflowDataSaga } from './stackoverflow'

export default function* () {
  yield all([
    fork(connectionHandlerSaga),
    fork(stackoverflowDataSaga),
  ])
}
