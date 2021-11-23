import React from "react";
import {View,Text,StyleSheet, Button} from 'react-native';
import MealList from "../components/MealList";

import {CATEGORIES, MEALS} from '../utils/dummy-data'

const CategoryMealScreen = props =>{

    const catId= props.navigation.getParam('categoryId');
    const listOfMeals= MEALS.filter(m=>m.categoryIds.indexOf(catId) >= 0);


    return(
        <View style={styles.container}>
            <MealList  listMeals={listOfMeals} navigation={props.navigation}/>
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