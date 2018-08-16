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
    disabled: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    disabled: false,
  }

  render() {
    const {
      label, onPress, red, disabled, width,
    } = this.props
    const varStyle = StyleSheet.create({ button: { width: width - 60 } })
    return (
      <View style={style.container}>
        <TouchableOpacity
          style={[
            style.button,
            varStyle.button,
            disabled
              ? style.disabled
              : red
                ? style.red
                : style.green,
          ]}
          onPress={disabled ? () => {} : onPress}
          activeOpacity={disabled ? 1 : 0.7}
        >
          <Text style={style.label}>
            {label}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 40,
  },
  disabled: {
    backgroundColor: '#818085',
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
