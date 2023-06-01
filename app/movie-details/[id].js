import React from 'react'
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native'
import { useSearchParams, Stack } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../constants'
import useFetch from '../../hooks/useFetch'
import { CastList, HeaderMovie } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'

const MovieDetails = () => {
  const params = useSearchParams()
  const {
    data: dataMovieDetail,
    isLoading: isLoadingMovieDetail,
    //refetch: refetchMovieDetail,
    error: errorMovieDetail
  } = useFetch(`titles/${params.id}`, {
    info: 'base_info'
  })
  const {
    data: dataMovieCast,
    isLoading: isLoadingMovieCast,
    //refetch: refetchMovieCast,
    error: errorMovieCast
  } = useFetch(`titles/${params.id}`, {
    info: 'extendedCast'
  })
  const {
    data: dataMovieCrew,
    isLoading: isLoadingMovieCrew,
    //refetch: refetchMovieCrew,
    error: errorMovieCrew
  } = useFetch(`titles/${params.id}`, {
    info: 'creators_directors_writers'
  })

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.primary
          },
          headerShadowVisible: false,
          headerTitle: '',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: COLORS.white
          },
          statusBarTranslucent: true,
          headerLeft: () => (
            <Feather
              name={'chevron-left'}
              size={SIZES.xxLarge}
              color={COLORS.white}
            />
          ),
          headerRight: () => (
            <Feather
              name={'share-2'}
              size={SIZES.xxLarge}
              color={COLORS.white}
            />
          )
        }}
      />
      {isLoadingMovieDetail || isLoadingMovieCast ? (
        <ActivityIndicator size={'large'} color={COLORS.primary} />
      ) : errorMovieDetail || errorMovieCast ? (
        <Text>Something went wrong!</Text>
      ) : dataMovieDetail.results === undefined ||
        dataMovieCast.results === undefined ||
        dataMovieCrew.results === undefined ? (
        <ActivityIndicator size={'large'} color={COLORS.primary} />
      ) : (
        <ScrollView showsVerticalScrollIndicator={true} scrollEnabled>
          <View style={{ flexDirection: 'column', flex: 1 }}>
            <HeaderMovie
              dataMovie={dataMovieDetail.results}
              dataCrew={dataMovieCrew.results}
            />
            <CastList
              data={dataMovieCast.results.cast}
              title={'Cast'}
              widthCard={150}
              heightCard={200}
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

export default MovieDetails
