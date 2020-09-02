import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Text from 'app/components/Text'
import { TextTypes } from 'app/types/entity/TextInput';
import ViewWrapper from 'app/components/ViewWrapper';

const Splash: React.FC = () => {

    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsReady(true)
        }, 2000);
    }, [])

    return (
        <ViewWrapper isReady={isReady} withAnimation withSafeAreaView style={styles.container}>
            <Text type={TextTypes.EXTRA_SMALL}>Welcome to app</Text>
            <Text type={TextTypes.EXTRA_SMALL}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta magna odio, eu scelerisque sem finibus ac. Sed elementum rutrum orci sit amet pulvinar. Cras tortor turpis, malesuada vitae malesuada in, bibendum non nulla.</Text>
        </ViewWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Splash;