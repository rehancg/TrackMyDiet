import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import Icon from 'app/components/Icon'

const Home: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Icon name="chatbot-icon" size={40} />
            </View>
        </>
    )
}

export default Home;