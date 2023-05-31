import { StyleSheet } from 'react-native'
import { COLORS, FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    paddingBottom: SIZES.medium,
    borderBottomLeftRadius: SIZES.large,
    borderBottomRightRadius: SIZES.large
  },
  movieTitle: {
    color: COLORS.white,
    fontFamily: FONT.medium,
    fontSize: SIZES.large
  },
  infoWrapper: {
    flexDirection: 'row',
    width: '100%',
    height: '50%',
    margin: SIZES.small
  },
  movieImg: {
    width: '35%',
    height: '100%',
    borderRadius: SIZES.xxLarge,
    marginRight: SIZES.small
  },
  movieIconsWrapper: {
    width: '50%'
  },
  synopsisWrapper: {
    margin: SIZES.small
  },
  movieSynopsis: {
    fontFamily: FONT.regular,
    textAlign: 'justify'
  }
})

export default styles
