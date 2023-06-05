import { StyleSheet } from 'react-native'

import { COLORS, SIZES } from '../constants'

const styles = StyleSheet.create({
    homeHeaderWrapper:{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.large,
        height: 120
    },
    contentWrapper:{
        flex: 1,
        paddingBottom: 120
    }
})

export default styles
