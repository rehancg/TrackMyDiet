import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationOptions } from '../helpers'
import HomeTabNavigator from '../HomeTabNavigator';
import AddFoodsToMeal from 'app/screens/AddFoodsToMeal';
import Icon from 'app/components/Icon';
import theme from 'app/theme/defaultTheme';
import FoodDetails from 'app/screens/FoodDetails';
import Article from 'app/screens/Article';

const HomeNavigatorStack = createStackNavigator();
const HomeNavigator: React.FC = () => {
    return (
        <HomeNavigatorStack.Navigator
            initialRouteName='HomeTabNavigator'
            screenOptions={{
                ...NavigationOptions.stackNavigator.default,
                headerBackTitleVisible: false,
                headerBackImage: () => <Icon size={16} color={theme.TEXT_COLOR_DEFAULT} name="arrow-back" style={{ paddingHorizontal: 16 }} />
            }}
        >
            <HomeNavigatorStack.Screen
                name='HomeTabNavigator'
                options={{
                    headerShown: false,
                }}
                component={HomeTabNavigator}
            />
            <HomeNavigatorStack.Screen
                name='AddNewFoodScreen'
                component={AddFoodsToMeal}
            />
            <HomeNavigatorStack.Screen
                name='FoodDetailsScreen'
                component={FoodDetails}
            />
            <HomeNavigatorStack.Screen
                name='ArticleScreen'
                component={Article}
                options={{
                    headerShown: false
                }}
            />
        </HomeNavigatorStack.Navigator>
    )
}

export default HomeNavigator;