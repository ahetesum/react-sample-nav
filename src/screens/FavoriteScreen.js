import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import MealList from "../components/MealList";
import COLORS from "../constants/Colors";
import { MEALS } from "../utils/dummy-data";

const FavoriteScreen = props =>{
    const catId= props.navigation.getParam('categoryId');
    const listOfMeals= MEALS.filter(m=>m.id ==='m1'|| m.id==='m2');


    return(
        <View style={styles.container}>
            <MealList  listMeals={listOfMeals} navigation={props.navigation}/>
        </View>
    );
};

FavoriteScreen.navigationOptions= navData =>{

    return {
        headerTitle:'Favorite Meals',
        headerLeft: <TouchableOpacity><Ionicons onPress={()=>{
            //navData.navigation.openDrawer();
            navData.navigation.toggleDrawer();
        }} name='ios-menu' style={{marginHorizontal:10}} size={25} color={COLORS.whiteColor} /></TouchableOpacity>,
    };
};


const styles= StyleSheet.create({
    container:{
        flex:1,
        
    },
});

export default FavoriteScreen;