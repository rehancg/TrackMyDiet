import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationOptions } from '../helpers'
import Login from 'app/screens/Login';
import Splash from 'app/screens/Splash';

const LoginNavigatorStack = createStackNavigator();
const LoginNavigator: React.FC = () => {
    return (
        <LoginNavigatorStack.Navigator
            initialRouteName='SplashScreen'
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
                name='SplashScreen'
                options={{ headerShown: false }}
                component={Splash}
            />
        </LoginNavigatorStack.Navigator>
    )
}

export default LoginNavigator;