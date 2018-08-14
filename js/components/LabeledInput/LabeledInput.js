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
    onSubmitEditing: PropTypes.func.isRequired,
    secureTextEntry: PropTypes.bool.isRequired,
    ref: PropTypes.object.isRequired,
  }

  static defaultProps = {
    label: '',
    value: '',
    secureTextEntry: false,
    onSubmitEditing: () => {},
    ref: React.createRef(),
  }

  render() {
    const {
      label,
      value,
      onChangeText,
      onLayout = () => {},
      onSubmitEditing,
      ref,
      secureTextEntry,
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
          onSubmitEditing={onSubmitEditing}
          onLayout={onLayout}
          secureTextEntry={secureTextEntry}
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
