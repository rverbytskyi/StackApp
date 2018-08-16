import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import PropTypes from 'prop-types'

import Title from '../../components/Title/Title'
import Button from '../../components/Button'

export default class Logout extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    logout: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  }

  static defaultProps = {
    width: Dimensions.get('window').width,
  }

  onPress = () => {
    const { logout, navigation } = this.props
    logout()
    navigation.navigate('Login')
  }

  render() {
    const { width } = this.props
    return (
      <View style={style.container}>
        <View style={style.item}>
          <Title text='Good Bye' />
        </View>
        <View style={style.buttonContainer}>
          <Button
            label='Logout'
            onPress={this.onPress}
            width={width}
            red
          />
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#273236',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 0.6,
    justifyContent: 'center',
  },
})
