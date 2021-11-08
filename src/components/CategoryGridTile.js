import React from "react";
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import COLORS from "../constants/Colors";

const CategoryGridTile = props =>{

    return(
        <TouchableOpacity style={styles.container} 
        onPress={props.onSelectCategory}>
            <View style={{borderRadius:8,backgroundColor:props.color,flex:1,alignItems:'flex-end',justifyContent:'flex-end'}}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};


const styles= StyleSheet.create({
    container:{
        flex:1,
        margin:8,
        height:150,
    },
    gridItem: {
        flex:1,
        borderRadius:8,
        height:150,
        shadowColor:COLORS.blackColor
      },
      title: {
        fontSize: 17,
        color:COLORS.primaryTextColor,
        fontWeight:'400',
        margin:8,
      },
});

export default CategoryGridTile;