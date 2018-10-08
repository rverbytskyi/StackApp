import React from 'react'
import {
  View, NetInfo, StatusBar, StyleSheet, Dimensions, AppState, findNodeHandle,
} from 'react-native'

import PrivacyWrapper from '../../components/PrivacyWrapper'

const NO_CONNECTION_MARKER = 'none'

export default class AppWrapper extends React.Component {
  constructor() {
    super()
    this.state = {
      shouldHideContent: false,
      hideContent: false,
      viewRef: null,
      blur: false,
    }
    this.contentRef = React.createRef()
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange)
    NetInfo.addEventListener('connectionChange', this.netInfoEvent)
    Dimensions.addEventListener('change', this.handleRotation)
    const { setWidth, setHeight } = this.props
    setWidth(Dimensions.get('window').width)
    setHeight(Dimensions.get('window').height)
  }

  handleAppStateChange = (appState) => {
    console.log(appState)
    switch (appState) {
      case 'inactive': {
        this.setState({
          shouldHideContent: true,
          hideContent: true,
        })
        break
      }
      case 'active': {
        this.setState({
          shouldHideContent: false,
        })
        break
      }
      case 'background': {
        this.setState({
          shouldHideContent: true,
          hideContent: true,
        })
        break
      }
      default:
        console.warn('unhandled appState')
    }
  }

  handleRotation = (dimensions) => {
    const { setWidth, setHeight } = this.props
    setWidth(dimensions.window.width)
    setHeight(dimensions.window.height)
  }

  netInfoEvent = (isConnected) => {
    const { connected, disconnected } = this.props
    console.log(isConnected)
    if (isConnected.type === NO_CONNECTION_MARKER) {
      disconnected()
    } else {
      connected()
    }
  }

  removePrivacyPlaceholder = () => {
    const { shouldHideContent } = this.state
    if (!shouldHideContent) {
      this.setState({
        hideContent: false,
      })
    }
  }

  setViewRef = () => {
    this.setState({
      viewRef: findNodeHandle(this.contentRef.current),
    })
  }

  render() {
    const { children } = this.props
    const { shouldHideContent, hideContent, viewRef } = this.state
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
        <View
          style={styles.contentBlock}
          ref={this.contentRef}
          onLayout={() => this.setViewRef()}
        >
          {children}
        </View>
        {
          hideContent && (
            <PrivacyWrapper
              shouldClose={!shouldHideContent}
              removePrivacyPlaceholder={this.removePrivacyPlaceholder}
              viewRef={viewRef}
            />
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#273236',
  },
  safeArea: {
    flex: 1,
    width: '100%',
  },
  contentBlock: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})
