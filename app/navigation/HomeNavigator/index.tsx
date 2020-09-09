import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from 'app/screens/Home';
import theme from 'app/theme/defaultTheme';
import Icon from 'app/components/Icon'

const TabBarIcon: React.FC<{
    focused: boolean;
    color: string;
    size: number;
    name: string,
}> = (props) => {
    return (
        <Icon size={props.size} color={props.color} name={props.name} />
    )
}

const HomeNavigatorTabs = createBottomTabNavigator();
const HomeNavigator: React.FC = () => {
    return (
        <HomeNavigatorTabs.Navigator
            initialRouteName='HomeScreen'
            tabBarOptions={{
                activeTintColor: theme.TAB_BAR_ACTIVE_ICON_COLOR,
                inactiveTintColor: theme.TAB_BAR_INACTIVE_ICON_COLOR,
                showLabel: false,
            }}
        >
            <HomeNavigatorTabs.Screen
                name='HomeScreen'
                component={Home}
                options={{
                    tabBarIcon: (props) => <TabBarIcon {...props} name="home" />
                }}
            />
            <HomeNavigatorTabs.Screen
                name='HomeScreen2'
                component={Home}
                options={{
                    tabBarIcon: (props) => <TabBarIcon {...props} name="calendar-alt" />
                }}
            />
            <HomeNavigatorTabs.Screen
                name='HomeScreen3'
                component={Home}
                options={{
                    tabBarIcon: (props) => <TabBarIcon {...props} name="dashboard" />
                }}
            />
            <HomeNavigatorTabs.Screen
                name='HomeScreen4'
                component={Home}
                options={{
                    tabBarIcon: (props) => <TabBarIcon {...props} name="user" />
                }}
            />
        </HomeNavigatorTabs.Navigator>
    )
}

export default HomeNavigator;