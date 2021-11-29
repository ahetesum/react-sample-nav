import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import COLORS from '../constants/Colors';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import CategoryScreen from '../screens/CategoryScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import FilterScreen from '../screens/FilterScreen';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from 'react-navigation-drawer';

const defaultNavOptios= {
    headerStyle:{backgroundColor:COLORS.primaryDarkColor},
    headerTintColor: COLORS.primaryTextColor,
};

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
    defaultNavigationOptions:defaultNavOptios
});
const FavNavigator = createStackNavigator({

    FavMeal: {
        screen:FavoriteScreen,

    },
    MealDetail: {
        screen:MealDetailScreen,
 
    },
},{
    defaultNavigationOptions:defaultNavOptios
});

const MealsTabFavNavigator= createBottomTabNavigator({
    Meal : {screen : MealNavigator, navigationOptions:{
        tabBarLabel:'Meals',
        tabBarIcon: (tabInfo)=>{
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        }
    }},
    Favorite: { screen: FavNavigator, navigationOptions:{
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

const FilterStackNav= createStackNavigator({
    Filter:FilterScreen,
},{defaultNavigationOptions:defaultNavOptios});

const MainDeawerNavigation= createDrawerNavigator({
    MealFavDrawerNav: {screen : MealsTabFavNavigator,navigationOptions:{
        drawerLabel:'Home'
    }},
    FilterDrawerNav:{screen : FilterStackNav,
        navigationOptions:{
        drawerLabel:'Filter'
    }},
},
{
    contentOptions:{
        activeTintColor:COLORS.accentColor,
    }
},
{
    initialRouteName: 'MealFavDrawerNav',

}
);


export default createAppContainer( MainDeawerNavigation);