import React from 'react'
import {
  View, Text, TextInput, StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'

export default class LabeledInput extends React.PureComponent {
  static propTypes = {
    label: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onLayout: PropTypes.func,
  }

  static defaultProps = {
    label: '',
    value: '',
  }

  render() {
    const {
      label, value, onChangeText, onLayout = () => {},
    } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          {label}
        </Text>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
          underlineColorAndroid='transparent'
          disableFullscreenUI
          onLayout={onLayout}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    textAlign: 'left',
  },
  textInput: {
    padding: 5,
    borderWidth: 0.5,
    borderColor: 'white',
  },
})
