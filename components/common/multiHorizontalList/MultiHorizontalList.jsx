import React from 'react'
import { View, Text } from 'react-native'

const MultiHorizontalList = ({ categories }) => {
  return (
    <View>
      <Text>Movie List of: {categories.map((cat) => (
        <Text key={cat}>{cat} </Text>
      ))}</Text>
    </View>
  )
}

export default MultiHorizontalList
