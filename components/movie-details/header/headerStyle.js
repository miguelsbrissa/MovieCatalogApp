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

    margin: SIZES.small
  },
  movieImg: {
    width: '40%',
    height: 250,
    borderRadius: SIZES.xxLarge,
    marginRight: SIZES.small
  },
  movieIconsWrapper: {
    width: '50%',
    paddingRight: SIZES.xSmall,
    flexDirection: 'column',
    alignContent: 'center'
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
