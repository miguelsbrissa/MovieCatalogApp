import React from 'react'
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from './iconTextStyle'

const IconText = ({
  iconName,
  iconSize,
  iconColor,
  text,
  textColor,
  textSize
}) => {
  const { iconContainer, textStyle } = styles
  return (
    <View style={iconContainer}>
      <Feather name={iconName} size={iconSize} color={iconColor} />
      <Text style={textStyle(textColor, textSize)}>{text}</Text>
    </View>
  )
}

export default IconText
