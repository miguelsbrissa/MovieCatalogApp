import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../constants'

const styles = StyleSheet.create({
    homeHeaderWrapper:{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.large,
        height: 120
    },
    contentWrapper:{
        flex: 1
    }
})

export default styles
