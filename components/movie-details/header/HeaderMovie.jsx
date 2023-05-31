import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { COLORS, FONT, SIZES } from '../../../constants'
import { checkImageURL } from '../../../utils'
import { Feather } from '@expo/vector-icons'
import styles from './headerStyle'

const HeaderMovie = ({ data }) => {
  const {
    headerWrapper,
    infoWrapper,
    movieIconsWrapper,
    movieImg,
    movieSynopsis,
    movieTitle,
    synopsisWrapper
  } = styles
  return (
    <View>
      <View style={headerWrapper}>
        <Text style={movieTitle}>{data.titleText.text}</Text>
      </View>
      <View style={infoWrapper}>
        <Image
          source={{
            uri: checkImageURL(data.primaryImage)
              ? data.primaryImage.url
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
          }}
          resizeMode={'cover'}
          style={movieImg}
        />
        <View style={movieIconsWrapper}>
          <View style={{ flexDirection: 'row', gap: SIZES.small }}>
            <Feather name={'star'} size={SIZES.xLarge} color={COLORS.primary} />
            <Text style={{ color: COLORS.gray3 }}>
              {data.ratingsSummary.aggregateRating}/10 from IMDb
            </Text>
          </View>
          <View style={{ flexDirection: 'row', gap: SIZES.small }}>
            <Feather
              name={'play-circle'}
              size={SIZES.xLarge}
              color={COLORS.primary}
            />
            <Text style={{ color: COLORS.gray3 }}>{data.runtime.seconds}</Text>
          </View>
        </View>
      </View>
      <View style={synopsisWrapper}>
        <Text style={movieSynopsis}>{data.plot.plotText.plainText}</Text>
      </View>
    </View>
  )
}

export default HeaderMovie
