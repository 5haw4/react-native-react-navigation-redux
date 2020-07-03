import React from 'react'
import { View, Text } from 'react-native'
import { useSelector, connect } from 'react-redux'

import { incrementCount, resetCount } from '../store/actions/counterActions'
import Button from './Button'

import styles from '../styles/components/Counter'

const Counter = (props) => {
    const counter = useSelector(state => state.counterReducer.counter)
    return (
        <View style={styles.wrapper}>
            <Text style={styles.countText}>Click Counter: {counter}</Text>
            <Text>*The above value is stored in redux</Text>
            <Button title="Increment Count" onPress={() => props.incrementCount()} />
            <Button title="Reset Count" onPress={() => props.resetCount()} />
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counterReducer.counter,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        incrementCount: () => dispatch(incrementCount()),
        resetCount: () => dispatch(resetCount()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);