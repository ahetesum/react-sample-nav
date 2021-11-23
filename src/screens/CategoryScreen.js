import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {View,Text,StyleSheet, FlatList} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import CategoryGridTile from "../components/CategoryGridTile";
import  COLORS from '../constants/Colors'
import {CATEGORIES} from '../utils/dummy-data'


const CategoryScreen = props =>{

    CategoryScreen.navigationOptions = {
       headerTitle:'Meals Categories'
    }

    const renderGridItem=(dataItem)=>{
        return (
            <CategoryGridTile title={dataItem.item.title} 
            color={dataItem.item.color} 
            onSelectCategory={()=>props.navigation.navigate({
                routeName:'CategoryMeal',
                params:{categoryId:dataItem.item.id}
                })}/>
        )
    }


    return(
            <FlatList 
                keyExtractor={(item,index)=>item.id}
                numColumns={2} 
                data={CATEGORIES}
                renderItem={renderGridItem}
            />
    );
};


CategoryScreen.navigationOptions= navData =>{

    return {
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

export default CategoryScreen;