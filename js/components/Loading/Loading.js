import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

export default class Loading extends React.PureComponent {
  render() {
    return (
      <View style={style.container}>
        <ActivityIndicator color='white' size='large' />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 30,
  },
})
