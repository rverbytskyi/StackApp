import { connect } from 'react-redux'
import Logout from './Logout.component'

import { logout } from '../../actions/user'

function mapStateToProps(state) {
  const { UI = {} } = state
  const { width } = UI
  return {
    width,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
