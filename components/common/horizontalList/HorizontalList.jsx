import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Card } from './../../../components'
import { SIZES } from '../../../constants'
import styles from './horizontalListStyle'

const HorizontalList = ({ title, data}) => {
  const { container, titleName } = styles

  return (
    <View style={container}>
      <Text style={titleName}>{title}</Text>
      <FlatList
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default HorizontalList
