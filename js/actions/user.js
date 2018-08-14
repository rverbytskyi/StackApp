import { LOGIN, LOGOUT } from '../types/user'

export function loggedIn(payload) {
  return {
    type: LOGIN,
    payload,
  }
}

export function logout() {
  return {
    type: LOGOUT,
  }
}
