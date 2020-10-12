
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginNavigator from './LoginNavigator';
import HomeNavigator from './HomeNavigator';
import OnBoadingNavigator from './OnboadingNavigator';
import { navigationRef } from 'app/utils/NavigationUtils'
import HomeDrawerNavigator from './HomeDrawerNavigator';
import MealDetails from 'app/screens/MealDetails';
import AddFoodsToMeal from 'app/screens/AddFoodsToMeal';
import FoodDetails from 'app/screens/FoodDetails';
import Article from 'app/screens/Article';
import EditView from 'app/screens/EditView';
import CustomMealPlan from 'app/screens/CustomMealPlan';
import Feed from 'app/screens/Feed';
import Profile from 'app/screens/Profile';
import { NavigationOptions } from './helpers';
import theme from 'app/theme/defaultTheme';
import Icon from 'app/components/Icon';

const MainStackNavigator = createStackNavigator();
const MainStack: React.FC = () => {
    return (
        <MainStackNavigator.Navigator
            initialRouteName='Login'
            screenOptions={{
                ...NavigationOptions.stackNavigator.default,
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerBackImage: () => <Icon size={16} color={theme.TEXT_COLOR_DEFAULT} name="arrow-back" style={{ paddingHorizontal: 16 }} />
            }}
        >
            <MainStackNavigator.Screen
                name='Login'
                component={LoginNavigator}
                options={{
                    headerShown: false
                }}
            />
            <MainStackNavigator.Screen
                name='OnBoading'
                component={OnBoadingNavigator}
                options={{
                    headerShown: false
                }}
            />
            <MainStackNavigator.Screen
                name='Home'
                component={HomeDrawerNavigator}
                options={{
                    headerShown: false
                }}
            />
            <MainStackNavigator.Screen
                name='CustomMealPlanScreen'
                component={CustomMealPlan}
            />
            <MainStackNavigator.Screen
                name='FeedScreen'
                component={Feed}
            />
            <MainStackNavigator.Screen
                name='ProfileScreen'
                component={Profile}
                options={{
                    headerShown: false
                }}
            />
            <MainStackNavigator.Screen
                name='MealPlanDetailsScreen'
                component={MealDetails}
            />
            <MainStackNavigator.Screen
                name='AddNewFoodScreen'
                component={AddFoodsToMeal}
            />
            <MainStackNavigator.Screen
                name='FoodDetailsScreen'
                component={FoodDetails}

            />
            <MainStackNavigator.Screen
                name='ArticleScreen'
                component={Article}
                options={{
                    headerShown: false
                }}
            />
            <MainStackNavigator.Screen
                name='EditProfileScreen'
                component={EditView}
                options={{
                    headerShown: true
                }}
            />
        </MainStackNavigator.Navigator>
    )
}

const AppNavigation: React.FC = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <MainStack />
        </NavigationContainer>
    );
};


export default AppNavigation;