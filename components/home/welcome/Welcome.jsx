import React from 'react'
import { View, Text } from 'react-native'
import styles from './welcomeStyle'

const Welcome = ({ name }) => {
  const { container, textGreet, textName, textColor} = styles
  return (
    <View style={container}>
      <Text style={[textGreet, textColor]}>hey, </Text>
      <Text style={[textName, textColor]}>{name}!</Text>
    </View>
  )
}

export default Welcome
