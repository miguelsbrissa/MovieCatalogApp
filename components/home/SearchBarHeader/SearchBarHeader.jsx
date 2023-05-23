import { View, TextInput } from 'react-native'
import React from 'react'
import styles from './searchBarHeaderStyles'
import { Feather } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../../constants'

const SearchBarHeader = () => {
  const { container, textInput, iconWrapper, center} = styles
  return (
    <View style={[container, center]}>
      <View style={[iconWrapper('left'), center]}>
        <Feather name={'search'} size={SIZES.xxLarge} color={COLORS.white} />
      </View>
      <TextInput style={textInput} />
      <View style={[iconWrapper('right'), center]}>
        <Feather name={'mic'} size={SIZES.xxLarge} color={COLORS.white} />
      </View>
    </View>
  )
}

export default SearchBarHeader
