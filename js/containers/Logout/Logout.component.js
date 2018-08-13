import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import PropTypes from 'prop-types'

import Title from '../../components/Title/Title'
import Button from '../../components/Button'

export default class Logout extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    logout: PropTypes.func.isRequired,
  }

  static defaultProps = {
    width: Dimensions.get('window').width,
  }

  render() {
    const { width, login } = this.props
    return (
      <View style={style.container}>
        <View style={style.margin} />
        <Title text='Good Bye' />
        <View style={style.item}>
          <Button
            label='Logout'
            onPress={() => login()}
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
  },
  margin: {
    flex: 0.3,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
  },
})
