import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { COLORS, SIZES } from '../../../constants'
import { checkImageURL } from '../../../utils'
import styles from './headerStyle'
import IconText from '../../common/iconText/IconText'

const HeaderMovie = ({ dataMovie, dataCrew }) => {
  const {
    headerWrapper,
    infoWrapper,
    movieIconsWrapper,
    movieImg,
    movieSynopsis,
    movieTitle,
    synopsisWrapper
  } = styles
  const directorName = dataCrew.directors[0].credits[0].name.nameText.text
  const writersName = dataCrew.writers[0].credits
    .map((writer) => ` ${writer.name.nameText.text}`)
    .toString()

  return (
    <View style={{ flex: 1 }}>
      <View style={headerWrapper}>
        <Text style={movieTitle}>{dataMovie.titleText.text}</Text>
      </View>
      <View style={infoWrapper}>
        <Image
          source={{
            uri: checkImageURL(dataMovie.primaryImage)
              ? dataMovie.primaryImage.url
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
            text={`${dataMovie.ratingsSummary.aggregateRating}/10 from IMDb`}
            textColor={COLORS.gray3}
            textSize={SIZES.small}
          />
          <IconText
            iconName={'play-circle'}
            iconColor={COLORS.primary}
            iconSize={SIZES.xLarge}
            text={dataMovie.runtime.seconds}
            textColor={COLORS.gray3}
            textSize={SIZES.small}
          />
          <IconText
            iconName={'video'}
            iconColor={COLORS.primary}
            iconSize={SIZES.xLarge}
            text={`Directed by: ${directorName}`}
            textColor={COLORS.gray3}
            textSize={SIZES.small}
          />
          <IconText
            iconName={'edit-3'}
            iconColor={COLORS.primary}
            iconSize={SIZES.xLarge}
            text={`Written by:${writersName}`}
            textColor={COLORS.gray3}
            textSize={SIZES.small}
          />
        </View>
      </View>
      <View style={synopsisWrapper}>
        <Text style={movieSynopsis}>{dataMovie.plot.plotText.plainText}</Text>
      </View>
    </View>
  )
}

export default HeaderMovie
