import React from 'react'
import { View, Text, Image } from 'react-native'
import { COLORS, FONT, SIZES } from '../../../constants'
import { checkImageURL } from '../../../utils'
import { Feather } from '@expo/vector-icons'
import styles from './headerStyle'
import IconText from '../../common/iconText/IconText'

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
          <IconText
            iconName={'star'}
            iconColor={COLORS.primary}
            iconSize={SIZES.xLarge}
            text={`${data.ratingsSummary.aggregateRating}/10 from IMDb`}
            textColor={COLORS.gray3}
            textSize={SIZES.small}
          />
          <IconText
            iconName={'play-circle'}
            iconColor={COLORS.primary}
            iconSize={SIZES.xLarge}
            text={data.runtime.seconds}
            textColor={COLORS.gray3}
            textSize={SIZES.small}
          />
        </View>
      </View>
      <View style={synopsisWrapper}>
        <Text style={movieSynopsis}>{data.plot.plotText.plainText}</Text>
      </View>
    </View>
  )
}

export default HeaderMovie
