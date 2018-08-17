import { connect } from 'react-redux'

import { flushStackoverflowData, getStackoverflowPage } from '../../actions/stackoverflow'
import StackList from './StackList.component'

function mapStateToProps(state) {
  const { stackoverflow = {} } = state
  const { data, page, hasMore } = stackoverflow
  return {
    data,
    page,
    hasMore,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getNewPage: data => dispatch(getStackoverflowPage(data)),
    flushData: () => dispatch(flushStackoverflowData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StackList)
