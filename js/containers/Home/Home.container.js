import { connect } from 'react-redux'
import Home from './Home.component'

function mapStateToProps(state) {
  const { user = {} } = state
  const { username } = user
  return {
    username,
  }
}

export default connect(mapStateToProps)(Home)
