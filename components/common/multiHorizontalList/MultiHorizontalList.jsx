import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import styles from './multiHorizontalListStyle'
import Card from '../card/Card'
import { SIZES } from '../../../constants'

const MultiHorizontalList = ({ categories }) => {
  const imgMovies = [
    'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg'
  ]
  const catMovies = ['Popular', 'Action', 'Comedy', 'Drama', 'Romance']
  const { container, catMovieName } = styles
  const [activeMovieCat, setActiveMovieCat] = useState('Popular')

  return (
    <View style={container}>
      <FlatList
        data={catMovies}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setActiveMovieCat(item)}>
            <Text style={catMovieName(activeMovieCat, item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
        data={imgMovies}
        renderItem={({ item }) => <Card item={item} />}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
      />
    </View>
  )
}

export default MultiHorizontalList
