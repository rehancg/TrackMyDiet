import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from 'app/screens/Home';
import theme from 'app/theme/defaultTheme';
import Icon from 'app/components/Icon'
import CustomMealPlan from 'app/screens/CustomMealPlan';
import Feed from 'app/screens/Feed';
import Profile from 'app/screens/Profile';

const TabBarIcon: React.FC<{
    focused: boolean;
    color: string;
    size: number;
    name: string,
}> = (props) => {
    return (
        <Icon size={20} color={props.color} name={props.name} />
    )
}

const HomeNavigatorTabs = createBottomTabNavigator();
const HomeTabNavigator: React.FC = () => {
    return (
        <HomeNavigatorTabs.Navigator
            initialRouteName='HomeScreen'
            tabBarOptions={{
                activeTintColor: theme.TAB_BAR_ACTIVE_ICON_COLOR,
                inactiveTintColor: theme.TAB_BAR_INACTIVE_ICON_COLOR,
                showLabel: true,
            }}
        >
            <HomeNavigatorTabs.Screen
                name='HomeScreen'
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: (props) => <TabBarIcon {...props} name="home" />
                }}
            />
            <HomeNavigatorTabs.Screen
                name='CustomMealPlanScreen'
                component={CustomMealPlan}
                options={{
                    tabBarLabel: 'Custom Plan',
                    tabBarIcon: (props) => <TabBarIcon {...props} name="pan" />
                }}
            />
            <HomeNavigatorTabs.Screen
                name='FeedScreen'
                component={Feed}
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: (props) => <TabBarIcon {...props} name="lightbulb" />
                }}
            />
            <HomeNavigatorTabs.Screen
                name='ProfileScreen'
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: (props) => <TabBarIcon {...props} name="user" />
                }}
            />
        </HomeNavigatorTabs.Navigator>
    )
}

export default HomeTabNavigator;