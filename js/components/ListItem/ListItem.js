import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

export default class ListItem extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  }

  static defaultProps = {
    onPress: () => {},
  }

  render() {
    const { title, onPress } = this.props
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: 'white',
  },
})
