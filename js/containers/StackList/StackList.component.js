import React from 'react'
import {
  View, FlatList, StyleSheet, Linking,
} from 'react-native'
import PropTypes from 'prop-types'
import InAppBrowser from 'react-native-inappbrowser-reborn'

import ListItem from '../../components/ListItem'
import Loading from '../../components/Loading'

export default class StackList extends React.PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    hasMore: PropTypes.bool.isRequired,
    getNewPage: PropTypes.func,
    flushData: PropTypes.func,
  }

  static defaultProps = {
    data: [],
    page: 1,
    getNewPage: () => {},
    hasMore: true,
  }

  componentDidMount() {
    const { getNewPage, page } = this.props
    getNewPage({ page })
  }

  componentWillUnmount() {
    const { flushData } = this.props
    flushData()
  }

  _keyExtractor = (item, index) => `${index}_${item.id}`

  _onEndReached = () => {
    const { getNewPage, page, hasMore } = this.props
    if (hasMore) {
      getNewPage({ page: page + 1 })
    }
  }

  onPressItem = async (link) => {
    const isAvailable = await InAppBrowser.isAvailable()
    console.log(isAvailable)
    if (isAvailable) {
      InAppBrowser.open(link, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: '#dadada',
        preferredControlTintColor: '#273236',
        readerMode: false,
        // Android Properties
        showTitle: true,
        toolbarColor: '#273236',
        secondaryToolbarColor: '#273236',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
      })
        .then(res => console.log(res))
        .catch(err => console.log('err', err))
    } else {
      Linking.openURL(link)
    }
  }

  _renderItem = ({ item, index }) => (
    <ListItem
      title={`${index + 1}. ${item.title}`}
      onPress={() => this.onPressItem(item.link)}
    />
  )

  render() {
    const { data } = this.props
    return (
      <View style={style.container}>
        <FlatList
          data={data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.5}
          ListEmptyComponent={Loading}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#273236',
  },
})
