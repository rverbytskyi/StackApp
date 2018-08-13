import React from 'react'
import {
  View, SafeAreaView, StatusBar, StyleSheet, Platform, Dimensions,
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
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar />
          {children}
        </SafeAreaView>
      </View>
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
    backgroundColor: 'white',
  },
  safeArea: {
    flex: 1,
    width: '100%',
  },
})
