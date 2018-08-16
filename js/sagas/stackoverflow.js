import {
  take, put, actionChannel, call,
} from 'redux-saga/effects'
import { buffers } from 'redux-saga'
import {
  GET_STACKOVERFLOW_PAGE_REQUEST,
  GET_STACKOVERFLOW_PAGE_SUCCESS,
  GET_STACKOVERFLOW_PAGE_FAIL,
  PROCEED_STACKOVERFLOW_DATA,
} from '../types/stackoverflow'
import { API_REQUEST } from '../types/api'

export function* stackoverflowDataSaga() {
  const channel = yield actionChannel([GET_STACKOVERFLOW_PAGE_REQUEST], buffers.expanding(5))
  while (true) {
    const action = yield take(channel)
    const { payload: { page = 1 } } = action
    const path = `https://api.stackexchange.com/2.2/search?page=${page}&order=desc&sort=relevance&intitle=react-native&site=stackoverflow`
    yield put({
      type: API_REQUEST,
      payload: {
        path,
        onSuccess: GET_STACKOVERFLOW_PAGE_SUCCESS,
        onFail: GET_STACKOVERFLOW_PAGE_FAIL,
      },
    })
    const response = yield take([GET_STACKOVERFLOW_PAGE_SUCCESS, GET_STACKOVERFLOW_PAGE_FAIL])
    if (response.type === GET_STACKOVERFLOW_PAGE_SUCCESS) {
      yield call(stackoverflowSuccessHandler, response.payload)
    } else if (response.type === GET_STACKOVERFLOW_PAGE_FAIL) {
      yield call(stackoverflowFailHandler, response.payload)
    }
  }
}

function* stackoverflowSuccessHandler(payload) {
  const { items, has_more } = payload
  yield put({ type: PROCEED_STACKOVERFLOW_DATA, payload: { items, hasMore: has_more } })
}

function* stackoverflowFailHandler(payload) {
  yield call(console.error, payload)
}
