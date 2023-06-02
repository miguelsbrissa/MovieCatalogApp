import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from './buttonIconStyle'

const ButtonIcon = ({ iconName, iconSize, iconColor, onPress }) => {
  const { container } = styles
  return (
    <TouchableOpacity onPress={onPress} style={container}>
      <Feather name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  )
}

export default ButtonIcon
