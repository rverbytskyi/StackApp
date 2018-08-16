import { connect } from 'react-redux'

import { getStackoverflowPage } from '../../actions/stackoverflow'
import StackList from './StackList.component'

function mapStateToProps(state) {
  const { stackoverflow = {} } = state
  const { data, page, hasMore } = stackoverflow
  console.log(stackoverflow)
  return {
    data,
    page,
    hasMore,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getNewPage: data => dispatch(getStackoverflowPage(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StackList)
