import { combineReducers } from 'redux'

import UI from './ui'
import user from './user'
import stackoverflow from './stackoverflow'

export default combineReducers({
  UI,
  user,
  stackoverflow,
})
