import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import PropTypes from 'prop-types'

import Title from '../../components/Title/Title'
import LabeledInput from '../../components/LabeledInput'
import Button from '../../components/Button'
import { fillStateInputs } from '../../utils/component.helper'

export default class Login extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    login: PropTypes.func.isRequired,
  }

  static defaultProps = {
    width: Dimensions.get('window').width,
  }

  inputs = [
    {
      key: 'username',
      label: 'Username',
      ref: React.createRef(),
    },
    {
      key: 'password',
      label: 'Password',
      ref: React.createRef(),
    },
  ]

  state = {
    ...fillStateInputs(this.inputs),
  }

  onChange = (key, value) => {
    this.setState({
      [key]: value,
    })
  }

  render() {
    const { width, login } = this.props
    const { username, password } = this.state
    return (
      <View style={style.container}>
        <View style={style.item}>
          <Title text='Welcome' />
        </View>
        <View style={style.item}>
          {this.inputs.map(el => (
            <LabeledInput
              key={el.key}
              label={el.label}
              value={this.state[el.key]}
              onChangeText={value => this.onChange(el.key, value)}
              ref={el.ref}
            />
          ))}
        </View>
        <View style={style.item}>
          <Button
            label='Login'
            onPress={() => login({ username, password })}
            width={width}
            red={false}
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
  item: {
    flex: 1,
    justifyContent: 'center',
  },
})
