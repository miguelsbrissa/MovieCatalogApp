import { View, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './searchBarHeaderStyles'
import { Feather } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../../constants'
import { useRouter } from 'expo-router'

const SearchBarHeader = () => {
  const { container, textInput, iconWrapper, center } = styles
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter()
  const handleEnd = () => {
    if (searchValue) router.push(`search/${searchValue}`)
  }

  return (
    <View style={[container, center]}>
      <View style={[iconWrapper('left'), center]}>
        <Feather name={'search'} size={SIZES.xxLarge} color={COLORS.white} />
      </View>
      <TextInput
        style={textInput}
        onEndEditing={handleEnd}
        onChangeText={(text) => setSearchValue(text)}
      />
      <View style={[iconWrapper('right'), center]}>
        <Feather name={'mic'} size={SIZES.xxLarge} color={COLORS.white} />
      </View>
    </View>
  )
}

export default SearchBarHeader
