import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import ListItem from '../../components/ListItem'

export default class StackList extends React.PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    hasMore: PropTypes.bool.isRequired,
    getNewPage: PropTypes.func,
  }

  static defaultProps = {
    data: [],
    page: 1,
    getNewPage: () => {},
  }

  _keyExtractor = item => item.id

  _onEndReached = () => {
    const { getNewPage, page, hasMore } = this.props
    if (hasMore) {
      getNewPage({ page: page + 1 })
    }
  }

  _renderItem = ({ item }) => (
    <ListItem text={item.title} />
  )

  render() {
    const { data } = this.props
    return (
      <FlatList
        data={data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        onEndReached={this._onEndReached}
      />
    )
  }
}
