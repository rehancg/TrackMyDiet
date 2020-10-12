import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from 'app/screens/Home';
import theme from 'app/theme/defaultTheme';
import CustomMealPlan from 'app/screens/CustomMealPlan';
import Feed from 'app/screens/Feed';
import Profile from 'app/screens/Profile';
import { NavigationOptions } from '../helpers';
import Icon from 'app/components/Icon';
import DrawerContent from './Content';

const HomeNavigator = createDrawerNavigator();
const HomeDrawerNavigator: React.FC = () => {
    return (
        <HomeNavigator.Navigator
            initialRouteName='HomeScreen'
            drawerContent={() => <DrawerContent />}
        >
            <HomeNavigator.Screen
                name='HomeScreen'
                component={Home}
            />

        </HomeNavigator.Navigator>
    )
}

export default HomeDrawerNavigator;