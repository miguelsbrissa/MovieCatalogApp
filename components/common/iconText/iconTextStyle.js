import { StyleSheet } from 'react-native'
import { COLORS, FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    gap: SIZES.small
  },
  textStyle: (textColor, textSize) => ({
    fontFamily: FONT.regular,
    color: textColor,
    fontSize: textSize
  })
})

export default styles
