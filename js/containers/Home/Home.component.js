import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Title from '../../components/Title'

export default class Home extends React.Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
  }

  render() {
    const { username } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.margin} />
        <Title text={`Hello, ${username}`} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  margin: {
    flex: 0.3,
  },
})
