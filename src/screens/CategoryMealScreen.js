import React from "react";
import {View,Text,StyleSheet, Button} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import MealListTile from "../components/MealListTile";

import {CATEGORIES, MEALS} from '../utils/dummy-data'

const CategoryMealScreen = props =>{

    const catId= props.navigation.getParam('categoryId');
    const listOfMeals= MEALS.filter(m=>m.categoryIds.indexOf(catId) >= 0);


    const renderMealItem=dataItem=>{
        return(
            <MealListTile item={dataItem.item} 
            onSelectMeal={()=>props.navigation.navigate({
                routeName:'MealDetail',
                params:{mealId:dataItem.item.id}
                })}/>
        )
    }


    return(
        <View style={styles.container}>
            <FlatList 
            data={listOfMeals}
            renderItem={renderMealItem}

            />
        </View>
    );
};


CategoryMealScreen.navigationOptions= navigationData=>{
    console.log(navigationData)
    const catId= navigationData.navigation.getParam('categoryId');
    const selectedCategory= CATEGORIES.find(c=>c.id===catId);
    return {headerTitle:selectedCategory.title};
};

const styles= StyleSheet.create({
    container:{
        flex:1,
        
    },
});

export default CategoryMealScreen;