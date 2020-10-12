import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationOptions } from '../helpers'
import Login from 'app/screens/Login';
import Welcome from 'app/screens/Welcome';
import LanguageSelect from 'app/screens/LanguageSelect';
import RequestOTP from 'app/screens/RequestOTP';
import VerifyOTP from 'app/screens/VerifyOTP';
import { IRequestOtpResponse } from 'app/types/api/IRequestOtpResponse';
import { useSelector } from 'react-redux';
import { IState } from 'app/types/state';

export type LoginStackParamList = {
    WelcomeScreen: undefined,
    LoginScreen: undefined,
    LanguageSelectScreen: undefined,
    RequestOTPScreen: undefined,
    VerifyOTPScreen: { telNo: string, data: IRequestOtpResponse },
};

const LoginNavigatorStack = createStackNavigator<LoginStackParamList>();
const LoginNavigator: React.FC = () => {
    return (
        <LoginNavigatorStack.Navigator
            initialRouteName='WelcomeScreen'
            screenOptions={{
                ...NavigationOptions.stackNavigator.default,
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
            <LoginNavigatorStack.Screen
                name='LanguageSelectScreen'
                options={{ headerShown: false }}
                component={LanguageSelect}
            />
            <LoginNavigatorStack.Screen
                name='RequestOTPScreen'
                options={{ headerShown: false }}
                component={RequestOTP}
            />
            <LoginNavigatorStack.Screen
                name='VerifyOTPScreen'
                options={{ headerShown: false }}
                component={VerifyOTP}
            />
        </LoginNavigatorStack.Navigator>
    )
}

export default LoginNavigator;