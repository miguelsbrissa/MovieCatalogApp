import React from 'react'
import { View, Text, SafeAreaView, ScrollView, TextInput } from 'react-native'
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

const Home = () => {
  const { homeHeaderWrapper, contentWrapper } = styles
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={contentWrapper}>
          <HorizontalList title={'Recommended'} />
          <MultiHorizontalList categories={['Popular', 'Action', 'Drama']} />
          <HorizontalList title={'Upcoming Movies'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
