import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationOptions } from '../helpers'
import Login from 'app/screens/Login';

const LoginNavigatorStack = createStackNavigator();
const LoginNavigator: React.FC = () => {
    return (
        <LoginNavigatorStack.Navigator
            initialRouteName=''
            screenOptions={{
                ...NavigationOptions.stackNavigator.default
            }}
        >
            <LoginNavigatorStack.Screen
                name='LoginScreen'
                options={{ headerShown: false }}
                component={Login}
            />
        </LoginNavigatorStack.Navigator>
    )
}

export default LoginNavigator;