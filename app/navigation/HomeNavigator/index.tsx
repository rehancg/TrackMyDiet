import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from 'app/screens/Home';

const HomeNavigatorTabs = createBottomTabNavigator();
const HomeNavigator: React.FC = () => {
    return (
        <HomeNavigatorTabs.Navigator
            initialRouteName='HomeScreen'
        >
            <HomeNavigatorTabs.Screen
                name='HomeScreen'
                component={Home}
            />
            <HomeNavigatorTabs.Screen
                name='HomeScreen2'
                component={Home}
            />
            <HomeNavigatorTabs.Screen
                name='HomeScreen3'
                component={Home}
            />
            <HomeNavigatorTabs.Screen
                name='HomeScreen4'
                component={Home}
            />
        </HomeNavigatorTabs.Navigator>
    )
}

export default HomeNavigator;