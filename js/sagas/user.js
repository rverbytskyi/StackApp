import { take, put, call } from 'redux-saga/effects'
import * as USER_TYPES from '../types/user'

export default function* userSaga() {
  while (true) {
    const action = yield take(USER_TYPES.LOGIN_REQUEST)
    yield call(handleLoginSaga, action.payload)
    const breakAction = yield take([USER_TYPES.LOGOUT_REQUEST, USER_TYPES.LOGIN_FAIL])
    if (breakAction.type === USER_TYPES.LOGOUT_REQUEST) {
      yield call(handleLogoutRequest)
    }
  }
}

function* handleLoginSaga() {
  const response = yield call()
  if (response.error) {
    yield put({ type: USER_TYPES.LOGIN_FAIL })
  } else {
    yield put({ type: USER_TYPES.LOGIN_SUCCESS })
  }
}

function* handleLogoutRequest() {
  const response = yield call()
  if (response.error) {
    yield put({ type: USER_TYPES.LOGOUT_FAIL })
  } else {
    yield put({ type: USER_TYPES.LOGOUT_SUCCESS })
  }
}
