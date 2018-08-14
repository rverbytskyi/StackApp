import * as USER_TYPES from '../types/user'

const initialState = {
  username: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case (USER_TYPES.LOGIN):
      return {
        ...state,
        username: action.payload.username,
      }
    case (USER_TYPES.LOGOUT):
      return {
        ...initialState,
      }
    default:
      return state
  }
}
