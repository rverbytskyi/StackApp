import { connect } from 'react-redux'
import Login from './Login.component'

function mapStateToProps(state) {
  const { ui = {} } = state
  const { width } = ui
  return {
    width,
  }
}

export default connect(mapStateToProps)(Login)
