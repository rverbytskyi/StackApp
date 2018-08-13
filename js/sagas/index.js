import { fork, all } from 'redux-saga/effects'
import userSaga from './user'

export default function* () {
  yield all([
    fork(userSaga),
  ])
}
