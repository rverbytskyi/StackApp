import { connect } from 'react-redux'
import { setUI } from '../../actions/ui'

import AppWrapper from './AppWrapper'

function mapDispatchToProps(dispatch) {
  return {
    setWidth: (value) => {
      dispatch(setUI({ name: 'width', value }))
    },
    setHeight: (value) => {
      dispatch(setUI({ name: 'height', value }))
    },
  }
}

export default connect(null, mapDispatchToProps)(AppWrapper)
