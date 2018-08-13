import { connect } from 'react-redux'
import Logout from './Logout.component'

import { logoutRequest } from '../../actions/user'

function mapStateToProps(state) {
  const { UI = {} } = state
  const { width } = UI
  return {
    width,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(logoutRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
