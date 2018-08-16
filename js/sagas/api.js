import {
  take, put, call, actionChannel, all, fork,
} from 'redux-saga/effects'
import { buffers } from 'redux-saga'
import { API_REQUEST, API_REQUEST_FAIL, API_REQUEST_SUCCESS } from '../types/api'
import apiCall from '../utils/api'

export function* apiHandlerSaga() {
  const requestChan = yield actionChannel([API_REQUEST], buffers.expanding(5))
  yield all([
    fork(apiHandleSuccess),
    fork(apiHandleFail),
  ])
  while (true) {
    const action = yield take(requestChan)
    const response = yield call(apiCall, { path: action.payload.path })
    if (!/^20\d/.test(response.status.toString())) {
      yield put({ type: API_REQUEST_FAIL, response, action })
    } else {
      yield put({ type: API_REQUEST_SUCCESS, response, action })
    }
  }
}

function* apiHandleFail() {
  while (true) {
    const fail = yield take(API_REQUEST_FAIL)
    if (fail.action.payload.onFail) {
      yield put({ type: fail.action.payload.onFail, payload: fail.response.payload })
    } else {
      console.error(fail.response)
    }
  }
}

function* apiHandleSuccess() {
  while (true) {
    const success = yield take(API_REQUEST_SUCCESS)
    if (success.action.payload.onSuccess) {
      yield put({ type: success.action.payload.onSuccess, payload: success.response.payload })
    }
  }
}
