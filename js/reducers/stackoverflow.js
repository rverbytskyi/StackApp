import { GET_STACKOVERFLOW_PAGE_REQUEST, PROCEED_STACKOVERFLOW_DATA } from '../types/stackoverflow'


const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_STACKOVERFLOW_PAGE_REQUEST: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case PROCEED_STACKOVERFLOW_DATA: {
      return {
        ...state,
        ...action.payload,
      }
    }
    default:
      return state
  }
}
