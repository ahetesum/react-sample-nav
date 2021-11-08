import React from "react";
import {View,Text,StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import COLORS from "../constants/Colors";

const MealListTile = props =>{

    return(
        <TouchableOpacity style={styles.container} 
        onPress={props.onSelectMeal}>
            <View style={styles.header}>
                <Text style={styles.title}>{props.item.title}</Text>
            </View>
            <ImageBackground source={{uri:props.item.imageUrl}} style={styles.gridItem}>
            </ImageBackground>
            <View style={styles.footer}>
                <Text style={styles.subTitle}>Time: {props.item.duration}</Text>
                <Text style={styles.subTitle}>Complex: {props.item.complexity}</Text>
                <Text style={styles.subTitle}>Afford: {props.item.affordability}</Text>
            </View>
        </TouchableOpacity>
    );
};


const styles= StyleSheet.create({
    container:{
        flex:1,
        margin:8,
        borderRadius:8,
        borderColor: COLORS.blackColor,
        borderWidth:1,
    },
    gridItem: {
        height:150,
        shadowColor:COLORS.dividerColor
      },
      header:{
          backgroundColor:COLORS.whiteColor,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          height:40,
      },
      footer:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:COLORS.whiteColor,
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,
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
});

export default MealListTile;