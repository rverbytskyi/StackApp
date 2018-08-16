import { GET_STACKOVERFLOW_PAGE_REQUEST } from '../types/stackoverflow'

export function getStackoverflowPage(payload) {
  return {
    type: GET_STACKOVERFLOW_PAGE_REQUEST,
    payload,
  }
}
