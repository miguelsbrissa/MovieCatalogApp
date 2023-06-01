import React, { useCallback, useState } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import styles from './multiHorizontalListStyle'
import Card from '../card/Card'
import { COLORS, SIZES } from '../../../constants'
import useFetch from '../../../hooks/useFetch'

const MultiHorizontalList = ({ categories }) => {
  const { container, catMovieName } = styles
  const [activeMovieCat, setActiveMovieCat] = useState(categories[0])
  const {
    data: dataMovieByCat,
    isLoading: isLoadingMovieByCat,
    refetch: refetchMovieByCat,
    error: errorMovieByCat
  } = useFetch('titles/', {
    genre: activeMovieCat,
    titleType: 'movie',
    list: 'most_pop_movies',
    startYear: '2010'
  })

  return (
    <View style={container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setActiveMovieCat(item)
              refetchMovieByCat()
            }}
          >
            <Text style={catMovieName(activeMovieCat, item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      {isLoadingMovieByCat ? (
        <ActivityIndicator size={'large'} color={COLORS.primary} />
      ) : errorMovieByCat ? (
        <Text>Something went wrong!</Text>
      ) : (
        <FlatList
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
          data={dataMovieByCat.results}
          renderItem={({ item }) => <Card item={item} width={200} height={250}/>}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  )
}

export default MultiHorizontalList
