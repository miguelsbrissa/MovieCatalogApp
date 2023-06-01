import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import styles from './castCardStyle'
import { checkImageURL } from '../../../utils'

const CastCard = ({ item, width, height }) => {
  const { container, castImg, castName } = styles

  return (
    <TouchableOpacity
      style={container(width, height)}
    >
      <Text style={castName} numberOfLines={1}>
        {item.name.nameText.text}
      </Text>
      <Image
        source={{
          uri: checkImageURL(item.name.primaryImage)
            ? item.name.primaryImage.url
            : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
        }}
        resizeMode={'cover'}
        style={castImg}
      />
    </TouchableOpacity>
  )
}

export default CastCard
