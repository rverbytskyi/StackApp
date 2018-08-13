import * as USER_TYPES from '../actions/user'

const initialState = {
  username: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case (USER_TYPES.LOGIN_SUCCESS):
      return {
        ...state,
        username: action.username,
      }
    case (USER_TYPES.LOGOUT_SUCCESS):
      return {
        ...initialState,
      }
    default:
      return state
  }
}
