import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import styles from './cardStyle'
import { checkImageURL } from '../../../utils/index'
import { useRouter } from 'expo-router'

const Card = ({ item }) => {
  const { container, movieImg, movieTitle } = styles
  const router = useRouter()
  return (
    <TouchableOpacity
      style={container}
      onPress={() => router.push(`movie-details/${item.id}`)}
    >
      <Text style={movieTitle} numberOfLines={1}>
        {item.titleText.text}
      </Text>
      <Image
        source={{
          uri: checkImageURL(item.primaryImage)
            ? item.primaryImage.url
            : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
        }}
        resizeMode={'cover'}
        style={movieImg}
      />
    </TouchableOpacity>
  )
}

export default Card
