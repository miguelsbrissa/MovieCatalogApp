import React from 'react'
import { View, Text, SafeAreaView, ScrollView, TextInput } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import styles from '../styles/style'
import { COLORS, SIZES } from '../constants'
import { Feather } from '@expo/vector-icons'
import { Welcome, SearchBarHeader } from '../components'

const Home = () => {
  const { homeHeaderWrapper } = styles
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
    </SafeAreaView>
  )
}

export default Home
