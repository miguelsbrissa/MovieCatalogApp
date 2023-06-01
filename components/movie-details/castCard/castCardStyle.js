import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
  container: (width, height) => ({
    borderRadius: SIZES.medium,
    justifyContent: 'space-between',
    width: width,
    height: height,
    backgroundColor: COLORS.gray,
    padding: SIZES.xSmall,
    alignItems: 'center'
  }),
  castImg: {
    width: '80%',
    height: '80%',
    borderRadius: SIZES.large,
    paddingBottom: SIZES.xSmall
  },
  castName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    paddingBottom: SIZES.xSmall
  }
})

export default styles
