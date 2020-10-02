import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationOptions } from '../helpers'
import HomeTabNavigator from '../HomeTabNavigator';
import AddFoodsToMeal from 'app/screens/AddFoodsToMeal';
import Icon from 'app/components/Icon';
import theme from 'app/theme/defaultTheme';
import FoodDetails from 'app/screens/FoodDetails';
import Article from 'app/screens/Article';
import EditView from 'app/screens/EditView';
import MealDetails from 'app/screens/MealDetails';
import HomeStackNavigator from '../HomeStackNavigator';

export type HomeRootStackParamList = {
    HomeStackNavigator: undefined,
    HomeTabNavigator: undefined;
    MealPlanDetailsScreen: undefined;
    AddNewFoodScreen: undefined;
    FoodDetailsScreen: undefined;
    ArticleScreen: undefined;
    EditProfileScreen: { title: string, Component: React.ReactNode }
};

const HomeNavigatorStack = createStackNavigator<HomeRootStackParamList>();
const HomeNavigator: React.FC = () => {
    return (
        <HomeNavigatorStack.Navigator
            initialRouteName='HomeStackNavigator'
            screenOptions={{
                ...NavigationOptions.stackNavigator.default,
                headerBackTitleVisible: false,
                headerBackImage: () => <Icon size={16} color={theme.TEXT_COLOR_DEFAULT} name="arrow-back" style={{ paddingHorizontal: 16 }} />
            }}
        >
            <HomeNavigatorStack.Screen
                name='HomeStackNavigator'
                options={{
                    headerShown: false,
                }}
                component={HomeStackNavigator}
            />
            <HomeNavigatorStack.Screen
                name='MealPlanDetailsScreen'
                component={MealDetails}
                options={{
                    headerShown: true
                }}
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
            <HomeNavigatorStack.Screen
                name='EditProfileScreen'
                component={EditView}
                options={{
                    headerShown: true
                }}
            />
        </HomeNavigatorStack.Navigator>
    )
}




export default HomeNavigator;