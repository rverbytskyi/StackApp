import React from 'react'
import { Animated, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { VibrancyView } from 'react-native-blur'

export default class PrivacyWrapper extends React.PureComponent {
  static propTypes = {
    shouldClose: PropTypes.bool.isRequired,
    removePrivacyPlaceholder: PropTypes.func.isRequired,
  }

  static defaultProps = {
    shouldClose: false,
    removePrivacyPlaceholder: () => {},
  }

  constructor() {
    super()
    this.animatedValue = new Animated.Value(0)
  }

  componentDidUpdate() {
    const { shouldClose, removePrivacyPlaceholder } = this.props
    if (shouldClose) {
      this.execAnimation(0, () => removePrivacyPlaceholder())
    } else {
      this.execAnimation(1)
    }
  }

  componentDidMount() {
    this.execAnimation(1)
  }

  execAnimation(toValue, callback = () => {}) {
    Animated.timing(
      this.animatedValue,
      {
        toValue,
        duration: 300,
        useNativeDriver: true,
      },
    ).start(callback)
  }

  render() {
    return (
      <Animated.View
        style={[
          styles.container,
          {
            opacity: this.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
        ]}
      >
        <VibrancyView
          blurType='light'
          blurAmount={10}
          style={styles.container}
        >
          <View />
        </VibrancyView>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
})
