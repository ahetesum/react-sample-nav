import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealListTile from '../components/MealListTile'





const MealList=props=>{

    const renderMealItem=dataItem=>{
        return(
            <MealListTile item={dataItem.item} 
            onSelectMeal={()=>props.navigation.navigate({
                routeName:'MealDetail',
                params:{mealId:dataItem.item.id,mealTitle:dataItem.item.title}
                })}/>
        )
    }

    return(
        <View style={styles.container}>
        <FlatList 
        data={props.listMeals}
        renderItem={renderMealItem}
        />
    </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        
    },
});

export default MealList;