import React from 'react'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { View, SafeAreaView } from 'react-native'
import { COLORS, SIZES } from '../../constants'
import { ButtonIcon, SearchList } from '../../components'

const Search = () => {
  const params = useSearchParams()
  const router = useRouter()

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
        <SearchList searchTerm={params.id} />
      </View>
    </SafeAreaView>
  )
}

export default Search
