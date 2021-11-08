import React from "react";
import {View,Text,StyleSheet,ImageBackground, Button} from 'react-native';
import COLORS from "../constants/Colors";
import { MEALS } from "../utils/dummy-data";

const MealDetailScreen = props =>{

    const mealId= props.navigation.getParam('mealId');
    const mealDetail= MEALS.find(m=>m.id === mealId);


    return(
        <View style={styles.container}>
            <ImageBackground source={{uri:mealDetail.imageUrl}} style={styles.gridItem}>
            </ImageBackground>
            <View style={styles.footer}>
                <Text style={styles.subTitle}>Time: {mealDetail.duration}</Text>
                <Text style={styles.subTitle}>Complex: {mealDetail.complexity}</Text>
                <Text style={styles.subTitle}>Afford: {mealDetail.affordability}</Text>
            </View>
            <View >
                <Text style={{fontSize:15, margin:8}}>Ingredients:</Text>
            {mealDetail.ingredients.map((item,key)=>(
                <Text key={key} style={styles.subTitle}> {item}</Text>
            ))}
            </View>
            <View >
                <Text style={styles.subTitle,{margin:8}}>Steps: {mealDetail.steps}</Text>
            </View>
            <Button title="Go Back" onPress={()=>{
                props.navigation.popToTop();
                //Clar Top
            }} />
        </View>
    );
};

MealDetailScreen.navigationOptions= navigationData=>{
    console.log(navigationData)
    const mealId= navigationData.navigation.getParam('mealId');
    const mealDetail= MEALS.find(m=>m.id === mealId);
    return {
        headerTitle:mealDetail.title,
        headerRight: <Button title='Fav'  style={styles.favButton} onPress={()=>console.log('Favorite dish')}></Button>,
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
});

export default MealDetailScreen;