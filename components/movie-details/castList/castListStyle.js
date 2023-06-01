import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        marginHorizontal: SIZES.medium
    },
    titleName:{
        color: COLORS.tertiary,
        fontFamily: FONT.regular,
        fontSize: SIZES.large,
        textDecorationLine: 'underline',
        paddingVertical: SIZES.large
    }
})

export default styles