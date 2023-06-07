import React from 'react'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native'
import { COLORS, SIZES } from '../../constants'
import { ButtonIcon, SearchList } from '../../components'
import useFetch from '../../hooks/useFetch'

const Search = () => {
  const params = useSearchParams()
  const router = useRouter()
  const { data, error, isLoading } = useFetch(
    `titles/search/title/${params.id}`,
    {
      exact: 'false',
      titleType: 'movie',
      list: 'most_pop_movies'
    }
  )
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.primary
          },
          headerShadowVisible: false,
          headerTitle: `Search for: ${params.id}`,
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
          )
        }}
      />
      <View style={{ marginTop: 20 }}>
        {isLoading &&  data.results === undefined ? (
          <ActivityIndicator size={'large'} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong!</Text>
        ) : (
          <SearchList data={data.results} />
        )}
      </View>
    </SafeAreaView>
  )
}

export default Search
