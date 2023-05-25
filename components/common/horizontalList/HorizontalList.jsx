import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Card } from './../../../components'
import { SIZES } from '../../../constants'
import styles from './horizontalListStyle'

const HorizontalList = ({ title }) => {
  const { container, titleName } = styles
  const imgMovies = [
    'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg'
  ]

  return (
    <View style={container}>
      <Text style={titleName}>{title}</Text>
      <FlatList
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
        data={imgMovies}
        renderItem={({ item }) => <Card item={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default HorizontalList
