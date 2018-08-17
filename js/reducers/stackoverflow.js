import {
  GET_STACKOVERFLOW_PAGE_REQUEST,
  PROCEED_STACKOVERFLOW_DATA,
  FLUSH_STACKOVERFLOW_DATA,
} from '../types/stackoverflow'


const initialState = {
  hasMore: true,
  data: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_STACKOVERFLOW_PAGE_REQUEST: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case PROCEED_STACKOVERFLOW_DATA: {
      const { items, hasMore } = action.payload
      const data = items.reduce((acc, val) => {
        acc.push({ title: val.title, link: val.link, id: val.question_id })
        return acc
      }, [])
      return {
        ...state,
        data: [...state.data, ...data],
        hasMore,
      }
    }
    case FLUSH_STACKOVERFLOW_DATA: {
      return {
        ...initialState,
      }
    }
    default:
      return state
  }
}
