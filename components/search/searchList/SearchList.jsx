import React from 'react'
import { FlatList, View, ActivityIndicator, Text } from 'react-native'
import styles from './searchListStyle'
import { COLORS, SIZES } from '../../../constants'
import SearchCard from '../searchCard/SearchCard'
import useFetch from '../../../hooks/useFetch'

const SearchList = ({ searchTerm }) => {
  const { container } = styles
  const {
    data: dataMovieSearch,
    error: errorMovieSearch,
    isLoading: isLoadingMovieSearch
  } = useFetch(`titles/search/title/${searchTerm}`, {
    exact: 'false',
    titleType: 'movie',
    list: 'most_pop_movies'
  })
  if (dataMovieSearch.results === undefined && isLoadingMovieSearch) {
    return <ActivityIndicator size={'large'} color={COLORS.primary} />
  } else if (errorMovieSearch) {
    return <Text>Something went wrong!</Text>
  } else {
    return (
      <View style={container}>
        <FlatList
          contentContainerStyle={{ columnGap: SIZES.medium }}
          data={dataMovieSearch.results}
          renderItem={({ item }) => <SearchCard item={item} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
    )
  }
}

export default SearchList
