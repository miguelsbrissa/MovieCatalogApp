import { Stack } from 'expo-router'
import { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

const Layout = () => {
  const [fonstLoaded] = useFonts({
    InterBold: require('../assets/fonts/Inter-Bold.ttf'),
    InterMedium: require('../assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('../assets/fonts/Inter-Regular.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fonstLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fonstLoaded])

  if (!fonstLoaded) return null

  return <Stack onLayout={onLayoutRootView} />
}

export default Layout
