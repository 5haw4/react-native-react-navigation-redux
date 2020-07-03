import React from 'react'

import Title from '../components/Title'
import Button from '../components/Button'
import Center from '../components/Center'
import Counter from '../components/Counter'

const Settings = (props) => {
    const { navigation } = props

    //navigating to the info screen in the stack
    const goToInfoScreen = () => {
        navigation.navigate("Info", { 
            navigatedFrom: "Settings" 
        })
    }

    return (
        <Center horizontal vertical>
            <Title title="Settings" />
            <Button title="Go To Info Screen" 
                onPress={() => goToInfoScreen()} />
            <Counter navigation={navigation} />
        </Center>
    )
}

export default Settings
