import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Platform } from 'react-native'

export default class AppWrapper extends React.Component {
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
