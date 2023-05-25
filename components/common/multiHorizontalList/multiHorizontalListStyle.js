import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: SIZES.medium
  },
  catMovieName: (activeMovieCat, item) => ({
    color: activeMovieCat === item ? COLORS.tertiary : COLORS.gray3,
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    textDecorationLine: activeMovieCat === item ? 'underline' : 'none',
    paddingVertical: SIZES.large
  })
})

export default styles
