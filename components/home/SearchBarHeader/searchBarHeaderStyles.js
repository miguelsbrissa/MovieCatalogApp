import { StyleSheet } from 'react-native'
import { COLORS, FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
  },
  textInput: {
    backgroundColor: COLORS.black,
    color: COLORS.white,
    width: '60%',
    height: SIZES.xLarge*2,
    padding: SIZES.xSmall,
    opacity: 0.5,
    marginVertical: SIZES.small
  },
  iconWrapper: (borderSide) => ({
    backgroundColor: COLORS.black,
    opacity: 0.5,
    height: SIZES.xLarge*2,
    paddingHorizontal: SIZES.xSmall,
    borderTopLeftRadius: borderSide === 'left' ? SIZES.large : 0,
    borderBottomLeftRadius: borderSide === 'left' ? SIZES.large : 0,
    borderTopRightRadius: borderSide === 'right' ? SIZES.large : 0,
    borderBottomRightRadius: borderSide === 'right' ? SIZES.large : 0
  }),
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
