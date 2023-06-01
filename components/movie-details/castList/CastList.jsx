import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { SIZES } from '../../../constants'
import CastCard from '../castCard/CastCard'
import styles from './castListStyle'

const CastList = ({ title, data, widthCard, heightCard}) => {
    const { container, titleName } = styles

    return (
      <View style={container}>
        <Text style={titleName}>{title}</Text>
        <FlatList
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
          data={data.edges}
          renderItem={({ item }) => <CastCard item={item.node} width={widthCard} height={heightCard}/>}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.node.name.id}
        />
      </View>
    )
}

export default CastList