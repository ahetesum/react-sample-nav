import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import COLORS from "../constants/Colors";

const FavoriteScreen = props =>{

    const favoriteMeals= useSelector(state=>state.meals.favoriteMeals);
    const catId= props.navigation.getParam('categoryId');

    if(favoriteMeals.length ===0 || !favoriteMeals)
    {
        return (
            <View style={styles.containerText}>
                <Text style={styles.noDataText}>No favorite meals. Please add favorite meal</Text>
            </View>
        );
    }
    else
    return(
        <View style={styles.container}>
            <MealList  listMeals={favoriteMeals} navigation={props.navigation}/>
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
    containerText:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    noDataText:{
        color:COLORS.primaryTextColor
    }
});

export default FavoriteScreen;