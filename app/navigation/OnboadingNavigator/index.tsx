import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationOptions } from '../helpers'
import Onboading from 'app/screens/Onboading';

const OnBoadingNavigatorStack = createStackNavigator();
const OnBoadingNavigator: React.FC = () => {
    return (
        <OnBoadingNavigatorStack.Navigator
            initialRouteName='OnBoadingScreen'
            screenOptions={{
                ...NavigationOptions.stackNavigator.default
            }}
        >
            <OnBoadingNavigatorStack.Screen
                name='OnBoadingScreen'
                options={{ headerShown: false }}
                component={Onboading}
            />
        </OnBoadingNavigatorStack.Navigator>
    )
}

export default OnBoadingNavigator;