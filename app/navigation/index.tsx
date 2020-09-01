
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginNavigator from './LoginNavigator';
import HomeNavigator from './HomeNavigator';
import { navigationRef } from 'app/utils/NavigationUtils'

const MainStackNavigator = createStackNavigator();
const MainStack: React.FC = () => {
    return (
        <MainStackNavigator.Navigator
            initialRouteName='Home'
            headerMode='none'
        >
            <MainStackNavigator.Screen
                name='Login'
                component={LoginNavigator}
            />
            <MainStackNavigator.Screen
                name='Home'
                component={HomeNavigator}
            />
        </MainStackNavigator.Navigator>
    )
}

const AppNavigation: React.FC = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <MainStack />
        </NavigationContainer>
    );
};


export default AppNavigation;