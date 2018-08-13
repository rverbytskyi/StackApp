import { connect } from 'react-redux'
import Login from './Login.component'

import { loginRequest } from '../../actions/user'

function mapStateToProps(state) {
  const { UI = {} } = state
  const { width } = UI
  return {
    width,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: creds => dispatch(loginRequest(creds)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
