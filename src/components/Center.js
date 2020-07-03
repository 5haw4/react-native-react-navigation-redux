import React from 'react'
import { View } from 'react-native'

import styles from '../styles/components/Center'

const Center = ({children, vertical, horizontal}) => {
    return (
        <View style={[styles.wrapper, horizontal && styles.centerHoriz, vertical && styles.centerVert]}>
            {children}
        </View>
    )
}

export default Center
