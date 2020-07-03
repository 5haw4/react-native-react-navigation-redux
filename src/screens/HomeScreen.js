import React from 'react'

import Title from '../components/Title'
import Button from '../components/Button'
import Center from '../components/Center'
import Counter from '../components/Counter'

const Home = (props) => {
    const { navigation } = props

    //navigating to the info screen in the stack
    const goToInfoScreen = () => {
        navigation.navigate("Info", { 
            navigatedFrom: "Home" 
        })
    }

    return (
        <Center horizontal vertical>
            <Title title="Home" />
            <Button title="Go To Info Screen" onPress={() => goToInfoScreen()} />
            <Counter navigation={navigation} />
        </Center>
    )
}

export default Home
