import React from 'react'
import { Text } from 'react-native'

import styles from '../styles/components/Title'

const Title = ({ title, children, style }) => {
    return (<Text style={[styles.title, style]}>{title}{children}</Text>)
}

export default Title
