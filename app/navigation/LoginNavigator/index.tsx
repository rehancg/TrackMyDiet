import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationOptions } from '../helpers'
import Login from 'app/screens/Login';
import Welcome from 'app/screens/Welcome';

const LoginNavigatorStack = createStackNavigator();
const LoginNavigator: React.FC = () => {
    return (
        <LoginNavigatorStack.Navigator
            initialRouteName='WelcomeScreen'
            screenOptions={{
                ...NavigationOptions.stackNavigator.default
            }}
        >
            <LoginNavigatorStack.Screen
                name='LoginScreen'
                options={{ headerShown: false }}
                component={Login}
            />
            <LoginNavigatorStack.Screen
                name='WelcomeScreen'
                options={{ headerShown: false }}
                component={Welcome}
            />
        </LoginNavigatorStack.Navigator>
    )
}

export default LoginNavigator;