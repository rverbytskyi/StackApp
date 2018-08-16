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
    reference: PropTypes.object,
    width: PropTypes.number.isRequired,
    autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
    returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search', 'send', 'none', 'previous', 'default', 'emergency-call', 'google', 'join', 'route', 'yahoo']),
  }

  static defaultProps = {
    autoCapitalize: 'sentences',
    returnKeyType: 'next',
    label: '',
    value: '',
    secureTextEntry: false,
    onSubmitEditing: () => {},
  }

  render() {
    const {
      label,
      value,
      onChangeText,
      onLayout = () => {},
      onSubmitEditing,
      reference,
      secureTextEntry,
      width,
      autoCapitalize,
      returnKeyType,
    } = this.props
    const varStyle = StyleSheet.create({ textInput: { width: width - 60 } })
    return (
      <View style={styles.container}>
        <Text style={[styles.label, varStyle.textInput]}>
          {label}
        </Text>
        <TextInput
          style={[styles.textInput, varStyle.textInput]}
          value={value}
          onChangeText={onChangeText}
          underlineColorAndroid='transparent'
          disableFullscreenUI
          onSubmitEditing={onSubmitEditing}
          onLayout={onLayout}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          ref={reference}
          returnKeyType={returnKeyType}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  label: {
    textAlign: 'left',
    color: 'white',
    marginVertical: 5,
  },
  textInput: {
    height: 40,
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'white',
    marginVertical: 5,
    color: 'white',
  },
})
