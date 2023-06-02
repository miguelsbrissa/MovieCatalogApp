import React from 'react'
import HorizontalList from '../../common/horizontalList/HorizontalList'
import { View, Text, ActivityIndicator } from 'react-native'
import useFetch from '../../../hooks/useFetch'
import { COLORS } from '../../../constants'

const SimilarMovieList = ({ originalMovie }) => {
  const { data, error, isLoading } = useFetch(`titles`, {
    genre: originalMovie.genres.genres[0].text,
    list: 'most_pop_movies'
  })
  if (isLoading) {
    return <ActivityIndicator size={'large'} color={COLORS.primary} />
  } else if (data.results === undefined) {
    return <ActivityIndicator size={'large'} color={COLORS.primary} />
  } else if (error) {
    return <Text>Something went wrong!</Text>
  } else {
    return (
      <HorizontalList
        data={data.results}
        title={'You might also like'}
        heightCard={200}
        widthCard={250}
      />
    )
  }
}

export default SimilarMovieList
