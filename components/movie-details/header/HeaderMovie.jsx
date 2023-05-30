import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { COLORS, FONT, SIZES } from '../../../constants'
import { checkImageURL } from '../../../utils'
import { Feather } from '@expo/vector-icons'

const HeaderMovie = ({ data }) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: COLORS.primary,
          alignItems: 'center',
          paddingBottom: SIZES.medium,
          borderBottomLeftRadius: SIZES.large,
          borderBottomRightRadius: SIZES.large
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontFamily: FONT.medium,
            fontSize: SIZES.large
          }}
        >
          {data.titleText.text}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: '50%',
          margin: SIZES.small
        }}
      >
        <Image
          source={{
            uri: checkImageURL(data.primaryImage)
              ? data.primaryImage.url
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
          }}
          resizeMode={'cover'}
          style={{
            width: '35%',
            height: '100%',
            borderRadius: SIZES.xxLarge,
            marginRight: SIZES.small
          }}
        />
        <View style={{ width: '50%' }}>
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
      <View style={{ margin: SIZES.small }}>
        <Text style={{ fontFamily: FONT.regular, textAlign: 'justify' }}>
          {data.plot.plotText.plainText}
        </Text>
      </View>
    </View>
  )
}

export default HeaderMovie
