import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator
} from 'react-native'
import { Stack } from 'expo-router'
import styles from '../styles/style'
import { COLORS, SIZES } from '../constants'
import {
  Welcome,
  SearchBarHeader,
  HorizontalList,
  MultiHorizontalList,
  ButtonIcon
} from '../components'
import useFetch from '../hooks/useFetch'

const Home = () => {
  const { homeHeaderWrapper, contentWrapper } = styles
  const {
    data: dataPopularMovies,
    isLoading: isLoadingPopularMovies,
    //refetch: refetchPopularMovies,
    error: errorPopularMovies
  } = useFetch('titles', {
    startYear: '2020',
    list: 'most_pop_movies'
  })
  const {
    data: dataUpcomingMovies,
    isLoading: isLoadingUpcomingMovies,
    //refetch: refetchUpcomingMovies,
    error: errorUpcomingMovies
  } = useFetch('titles/x/upcoming', {
    titleType: 'movie',
    sort: 'year.incr',
    startYear: '2023'
  })
  const catMovies = [
    'Sci-Fi',
    'Action',
    'Comedy',
    'Drama',
    'Horror',
    'Romance',
    'Family',
    'War',
    'Western',
    'Crime'
  ]
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
              iconName={'menu'}
              iconSize={SIZES.xxLarge}
              iconColor={COLORS.white}
              onPress={() => {}}
            />
          )
        }}
      />
      <View style={homeHeaderWrapper}>
        <Welcome name={'Luke Skywalker'} />
        <SearchBarHeader />
      </View>
      <ScrollView showsVerticalScrollIndicator={true} scrollEnabled>
        <View style={contentWrapper}>
          {isLoadingPopularMovies ? (
            <ActivityIndicator size={'large'} color={COLORS.primary} />
          ) : errorPopularMovies ? (
            <Text>Something went wrong!</Text>
          ) : (
            <HorizontalList
              title={'Recommended'}
              data={dataPopularMovies.results}
              widthCard={200}
              heightCard={250}
            />
          )}
          <MultiHorizontalList
            categories={catMovies}
            widthCard={200}
            heightCard={250}
          />
          {isLoadingUpcomingMovies ? (
            <ActivityIndicator size={'large'} color={COLORS.primary} />
          ) : errorUpcomingMovies ? (
            <Text>Something went wrong!</Text>
          ) : (
            <HorizontalList
              title={'Upcomoming'}
              data={dataUpcomingMovies.results}
              widthCard={200}
              heightCard={250}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
