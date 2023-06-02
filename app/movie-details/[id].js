import React from 'react'
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native'
import { useSearchParams, Stack, useRouter } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../constants'
import useFetch from '../../hooks/useFetch'
import {
  ButtonIcon,
  CastList,
  HeaderMovie,
  SimilarMovieList
} from '../../components'
import { ScrollView } from 'react-native-gesture-handler'

const MovieDetails = () => {
  const params = useSearchParams()
  const router = useRouter()
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
            <ButtonIcon
              iconName={'chevron-left'}
              iconColor={COLORS.white}
              iconSize={SIZES.xxLarge}
              onPress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ButtonIcon
              iconName={'share-2'}
              iconColor={COLORS.white}
              iconSize={SIZES.xxLarge}
              onPress={() => {}}
            />
          )
        }}
      />
      {isLoadingMovieDetail || isLoadingMovieCast || isLoadingMovieCrew ? (
        <ActivityIndicator size={'large'} color={COLORS.primary} />
      ) : errorMovieDetail || errorMovieCast || errorMovieCrew ? (
        <Text>Something went wrong!</Text>
      ) : dataMovieDetail.results === undefined ||
        dataMovieCast.results === undefined ||
        dataMovieCrew.results === undefined ? (
        <ActivityIndicator size={'large'} color={COLORS.primary} />
      ) : (
        <ScrollView showsVerticalScrollIndicator={true} scrollEnabled>
          <View
            style={{
              flexDirection: 'column',
              flex: 1,
              paddingBottom: SIZES.medium
            }}
          >
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
            <SimilarMovieList originalMovie={dataMovieDetail.results} />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

export default MovieDetails
