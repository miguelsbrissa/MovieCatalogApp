import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator
} from 'react-native'
import { Stack, useRouter } from 'expo-router'
import styles from '../styles/style'
import { COLORS, SIZES } from '../constants'
import { Feather } from '@expo/vector-icons'
import {
  Welcome,
  SearchBarHeader,
  HorizontalList,
  MultiHorizontalList
} from '../components'
import useFetch from '../hooks/useFetch'

const Home = () => {
  const { homeHeaderWrapper, contentWrapper } = styles
  const { data, isLoading, refetch, error } = useFetch('titles', {
    year: '2020',
    list: 'most_pop_movies'
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
            <Feather name={'menu'} size={SIZES.xxLarge} color={COLORS.white} />
          )
        }}
      />
      <View style={homeHeaderWrapper}>
        <Welcome name={'Luke Skywalker'} />
        <SearchBarHeader />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} scrollEnabled>
        <View style={contentWrapper}>
          {isLoading ? (
            <ActivityIndicator size={'large'} color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong!</Text>
          ) : (
            <HorizontalList title={'Recommended'} data={data.results}/>
          )}
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
