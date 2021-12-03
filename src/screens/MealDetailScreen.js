import { Ionicons } from "@expo/vector-icons";
import React, { useCallback, useEffect } from "react";
import {View,Text,StyleSheet,ImageBackground, Button} from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import COLORS from "../constants/Colors";
import { toogleFavorite } from "../store/actions/mealsAction";

const MealDetailScreen = props =>{

    const availableMeals= useSelector(state=>state.meals.meals);
    const mealId= props.navigation.getParam('mealId');
    const mealDetail= availableMeals.find(m=>m.id === mealId);
    const isFavoriteMeal= useSelector(
        state=>state.meals.favoriteMeals.some(m=>m.id===mealId)
        );

    const dispatchFav= useDispatch();

    const toggleFavoriteHandler=useCallback(()=>{
        dispatchFav(toogleFavorite(mealId));
    },[dispatchFav,mealId]);

    useEffect(()=>{
        props.navigation.setParams({toogleFav:toggleFavoriteHandler});
    },[toggleFavoriteHandler]);

    useEffect(()=>{
        props.navigation.setParams({isFav:isFavoriteMeal});
    },[isFavoriteMeal]);

    return(
        <View style={styles.container}>
            <ImageBackground source={{uri:mealDetail.imageUrl}} style={styles.gridItem}>
            </ImageBackground>
            <View style={styles.footer}>
                <Text style={styles.subTitle}>Time: {mealDetail.duration}</Text>
                <Text style={styles.subTitle}>Complex: {mealDetail.complexity}</Text>
                <Text style={styles.subTitle}>Afford: {mealDetail.affordability}</Text>
            </View>
            <ScrollView style={styles.scroolElm}>
            <View >
                <Text style={{fontSize:15, margin:8}}>Ingredients:</Text>
            {mealDetail.ingredients.map((item,key)=>(
                <View style={styles.listItem}>
                    <Text key={key} style={styles.subTitle}> {item}</Text>
                </View>
            ))}
            </View>
            <View >
                <Text style={styles.subTitle,{margin:8}}>Steps: {mealDetail.steps}</Text>
            </View>
            <Button title="Go Back" onPress={()=>{
                props.navigation.popToTop();
                //Clar Top
            }} />
            </ScrollView>
        </View>
    );
};

MealDetailScreen.navigationOptions= navigationData=>{
    console.log(navigationData)
    const mealId= navigationData.navigation.getParam('mealId');
    const mealTitle= navigationData.navigation.getParam('mealTitle');
    const tgFavorite= navigationData.navigation.getParam('toogleFav');
    const isFavorite= navigationData.navigation.getParam('isFav');

    return {
        headerTitle: mealTitle,
        headerRight: <TouchableOpacity><Ionicons onPress={tgFavorite} 
            name={isFavorite? "ios-star":"ios-star-outline"} style={{marginHorizontal:10}} size={25} color={COLORS.whiteColor} /></TouchableOpacity>,
    };
};

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    gridItem: {
        height:150,
        shadowColor:COLORS.dividerColor
      },
      header:{
          backgroundColor:COLORS.whiteColor,
  
          height:40,
      },
      footer:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:COLORS.whiteColor,

        height:40,
    },
      title: {
        fontSize: 17,
        color:COLORS.primaryTextColor,
        fontWeight:'600',
        margin:8,
      },
      subTitle: {
        fontSize: 14,
        color:COLORS.primaryTextColor,
        margin:8,
      },
      favButton:{
          color:COLORS.primaryColor,
          marginHorizontal:8,
      },
      listItem:{
          margin:5,
          padding:5,
          borderColor:COLORS.dividerColor,
          borderWidth:1,
    },
    scroolElm:{
        paddingHorizontal:16,
        marginBottom:30,
    },
});

export default MealDetailScreen;