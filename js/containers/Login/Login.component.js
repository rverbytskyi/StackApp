import React from 'react'
import {
  ScrollView, View, StyleSheet, Dimensions, Alert, Animated, Vibration,
} from 'react-native'
import PropTypes from 'prop-types'

import Title from '../../components/Title/Title'
import LabeledInput from '../../components/LabeledInput'
import Button from '../../components/Button'
import { fillStateInputs } from '../../utils/component.helper'
import { checkUserCreds } from '../../utils/async.storage'

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
      secureTextEntry: true,
      ref: React.createRef(),
    },
  ]

  state = {
    creds: {
      ...fillStateInputs(this.inputs),
    },
    animatedValue: new Animated.Value(0),
  }

  wrongPinAnimations = (function (state) {
    const { animatedValue } = state
    const shakesQty = 10
    const amplitude = 5
    const totalDuration = 500
    const animations = []
    for (let i = 1; i <= shakesQty; i++) {
      animations.push(Animated.timing(
        animatedValue,
        {
          toValue: i === shakesQty ? 0 : amplitude * (i % 2 ? 1 : -1),
          duration: Math.round(totalDuration / shakesQty),
          useNativeDriver: true,
        },
      ))
    }
    return animations
  }(this.state))

  onChange = (key, value) => {
    this.setState((state) => {
      const { creds } = state
      creds[key] = value
      return { creds }
    })
  }

  checkCreds = async () => {
    const { loggedIn, navigation } = this.props
    const { creds } = this.state
    const { username } = creds
    const response = await checkUserCreds(creds)
    if (response.success) {
      loggedIn(username)
      navigation.navigate('App')
    } else if (!response.error) {
      this.wrongCredsAnimation()
    } else if (response.error) {
      Alert.alert(
        'Error',
        "We've encountered an error while checking entered credentials\nPlease try again later",
        [
          { text: 'OK', onPress: () => {} },
        ],
      )
    }
  }

  wrongCredsAnimation = () => {
    Vibration.vibrate(500)
    Animated.sequence(this.wrongPinAnimations).start()
  }

  jumpBetweenInputs = (currIndex) => {
    if (currIndex < this.inputs.length - 1) {
      this.inputs[currIndex + 1].ref.current.focus()
    } else {
      this.inputs[currIndex].ref.current.blur()
    }
  }

  render() {
    const { width } = this.props
    const { animatedValue, creds: { username, password } } = this.state
    return (
      <ScrollView
        contentContainerStyle={style.container}
        keyboardDismissMode='on-drag'
        keyboardShouldPersistTaps='handled'
      >
        <View style={style.item}>
          <Title text='Welcome' />
        </View>
        <Animated.View
          style={[
            style.item,
            {
              transform: [{
                translateX: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              }],
            },
          ]}
        >
          {this.inputs.map((el, index) => (
            <LabeledInput
              key={el.key}
              label={el.label}
              value={this.state[el.key]}
              onChangeText={value => this.onChange(el.key, value)}
              onSubmitEditing={this.jumpBetweenInputs(index)}
              secureTextEntry={el.secureTextEntry}
              ref={el.ref}
            />
          ))}
        </Animated.View>
        <View style={style.item}>
          <Button
            label='Login'
            onPress={() => this.checkCreds()}
            width={width}
            disabled={!username && !password}
            red={false}
          />
        </View>
      </ScrollView>
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
