import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Home from 'app/screens/Home';
import theme from 'app/theme/defaultTheme';
import CustomMealPlan from 'app/screens/CustomMealPlan';
import Feed from 'app/screens/Feed';
import Profile from 'app/screens/Profile';
import { NavigationOptions } from '../helpers';
import Icon from 'app/components/Icon';

const HomeNavigator = createStackNavigator();
const HomeStackNavigator: React.FC = () => {
    return (
        <HomeNavigator.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
                ...NavigationOptions.stackNavigator.default,
                headerBackTitleVisible: false,
                headerBackImage: () => <Icon size={16} color={theme.TEXT_COLOR_DEFAULT} name="arrow-back" style={{ paddingHorizontal: 16 }} />
            }}
        >
            <HomeNavigator.Screen
                name='HomeScreen'
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <HomeNavigator.Screen
                name='CustomMealPlanScreen'
                component={CustomMealPlan}
            />
            <HomeNavigator.Screen
                name='FeedScreen'
                component={Feed}
            />
            <HomeNavigator.Screen
                name='ProfileScreen'
                component={Profile}
                options={{
                    headerShown: false
                }}
            />
        </HomeNavigator.Navigator>
    )
}

export default HomeStackNavigator;