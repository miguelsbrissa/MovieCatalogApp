import { StyleSheet } from 'react-native'
import { COLORS, FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    textGreet: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium
    },
    textName:{
        fontFamily: FONT.regular,
        fontSize: SIZES.xLarge
    },
    textColor:{
        color: COLORS.white
    }
})

export default styles
