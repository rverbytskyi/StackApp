import { connect } from 'react-redux'
import Login from './Login.component'

import { loggedIn } from '../../actions/user'

function mapStateToProps(state) {
  const { UI = {} } = state
  const { width } = UI
  return {
    width,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loggedIn: username => dispatch(loggedIn({ username })),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
