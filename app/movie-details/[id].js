import React from 'react'
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native'
import { useSearchParams, Stack } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../constants'
import useFetch from '../../hooks/useFetch'
import { HeaderMovie } from '../../components'

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
      <View>
        {isLoadingMovieDetail ? (
          <ActivityIndicator size={'large'} color={COLORS.primary} />
        ) : errorMovieDetail ? (
          <Text>Something went wrong!</Text>
        ) : dataMovieDetail.results === undefined ? (
          <ActivityIndicator size={'large'} color={COLORS.primary} />
        ) : (
          <HeaderMovie data={dataMovieDetail.results} />
        )}
      </View>
    </SafeAreaView>
  )
}

export default MovieDetails
