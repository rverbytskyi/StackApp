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
    ref: PropTypes.object.isRequired,
  }

  static defaultProps = {
    label: '',
    value: '',
    ref: React.createRef(),
  }

  render() {
    const {
      label, value, onChangeText, onLayout = () => {}, ref,
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
          ref={ref}
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
