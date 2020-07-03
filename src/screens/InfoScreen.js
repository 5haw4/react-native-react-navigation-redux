import React from 'react'
import { Text } from 'react-native'

import Title from '../components/Title'
import Center from '../components/Center'
import Counter from '../components/Counter'

const Info = ({ navigation, route }) => {
    //extracting from the route params the route name of the screen that navigated as here
    const { navigatedFrom } = route.params
    return (
        <Center horizontal vertical>
            <Title>Info</Title>
            <Text>Navigated from: <Text style={{fontWeight: "700", fontSize: 16}}>{navigatedFrom} screen</Text></Text>
            <Counter navigation={navigation} />
        </Center>
    )
}

export default Info