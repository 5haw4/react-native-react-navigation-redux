import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from '../styles/components/Button'

export default Button = (props) => {
    const { title, children, style, onPress } = props;
    return(
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            {children}
            {title ? <Text style={styles.text}>{title}</Text> : null}
        </TouchableOpacity>
    )
}