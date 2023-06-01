import { StyleSheet } from 'react-native'
import { FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: SIZES.small
  },
  textStyle: (textColor, textSize) => ({
    fontFamily: FONT.regular,
    color: textColor,
    fontSize: textSize
  })
})

export default styles
