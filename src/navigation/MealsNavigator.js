import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import COLORS from '../constants/Colors';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import CategoryScreen from '../screens/CategoryScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';

const MealNavigator = createStackNavigator({
    Category: {
        screen:CategoryScreen,
        navigationOptions:{
            headerTitle:"Meals Category"
        }
    },
    CategoryMeal: {
        screen:CategoryMealScreen,

    },
    MealDetail: {
        screen:MealDetailScreen,
 
    },
},{
    defaultNavigationOptions:{
        headerStyle:{backgroundColor:COLORS.primaryDarkColor},
        headerTintColor: COLORS.primaryTextColor,
    }
});


const MealsTabFavNavigator= createBottomTabNavigator({
    Meal : {screen : MealNavigator, navigationOptions:{
        tabBarLabel:'Meals',
        tabBarIcon: (tabInfo)=>{
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        }
    }},
    Favorite: { screen: FavoriteScreen, navigationOptions:{
        tabBarLabel:'Favorites',
        tabBarIcon: (tabInfo)=>{
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
        }
    }},
},
{tabBarOptions:{
    activeTintColor:COLORS.accentColor,
}
});

export default createAppContainer( MealsTabFavNavigator);