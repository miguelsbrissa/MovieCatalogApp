import React from 'react'
import { FlatList, View } from 'react-native'
import styles from './searchListStyle'
import { SIZES } from '../../../constants'
import SearchCard from '../searchCard/SearchCard'

const SearchList = ({ data }) => {
  const { container } = styles
  return (
    <View style={container}>
      <FlatList
        contentContainerStyle={{ columnGap: SIZES.medium }}
        data={data}
        renderItem={({ item }) => <SearchCard item={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default SearchList
