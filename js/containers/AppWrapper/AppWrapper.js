import React from 'react'
import {
  SafeAreaView, StatusBar, StyleSheet, Platform, Dimensions,
} from 'react-native'

export default class AppWrapper extends React.Component {
  componentDidMount() {
    Dimensions.addEventListener('change', this.handleRotation)
    const { setWidth, setHeight } = this.props
    setWidth(Dimensions.get('window').width)
    setHeight(Dimensions.get('window').height)
  }

  handleRotation = (dimensions) => {
    const { setWidth, setHeight } = this.props
    setWidth(dimensions.window.width)
    setHeight(dimensions.window.height)
  }

  render() {
    const { children } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        {children}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    ...Platform.select({
      ios: {
      },
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
})
