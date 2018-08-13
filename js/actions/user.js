import * as TYPES from '../types/user'

export function loginRequest(payload) {
  return {
    type: TYPES.LOGIN_REQUEST,
    payload,
  }
}

export function logoutRequest() {
  return {
    type: TYPES.LOGOUT_REQUEST,
  }
}
