import { FLUSH_STACKOVERFLOW_DATA, GET_STACKOVERFLOW_PAGE_REQUEST } from '../types/stackoverflow'

export function getStackoverflowPage(payload) {
  return {
    type: GET_STACKOVERFLOW_PAGE_REQUEST,
    payload,
  }
}

export function flushStackoverflowData() {
  return {
    type: FLUSH_STACKOVERFLOW_DATA,
  }
}
