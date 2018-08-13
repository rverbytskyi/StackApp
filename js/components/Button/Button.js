import React from 'react'
import {
  View, TouchableOpacity, Text, StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'

export default class Button extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
    red: PropTypes.bool.isRequired,
  }

  render() {
    const { label, onPress, red } = this.props
    return (
      <View>
        <TouchableOpacity
          style={[
            style.button,
            red ? style.red : style.green,
          ]}
          onPress={onPress}
        >
          <Text>
            {label}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 25,
  },
  red: {
    backgroundColor: '#7b1a1f',
  },
  green: {
    backgroundColor: '#526c2e',
  },
  label: {
    color: 'white',
    textAlign: 'center',
  },
})
