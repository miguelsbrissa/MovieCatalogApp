import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    borderRadius: SIZES.medium,
    justifyContent: 'space-between',
    width: '100%',
    height: 200,
    backgroundColor: COLORS.gray,
    padding: SIZES.xSmall,
    alignItems: 'center',
    marginVertical: SIZES.medium
  },
  movieImg: {
    width: '80%',
    height: '80%',
    borderRadius: SIZES.large,
    paddingBottom: SIZES.xSmall
  },
  movieTitle: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    paddingBottom: SIZES.xSmall
  }
})

export default styles
