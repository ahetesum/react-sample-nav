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

const styles= StyleSheet.create({
    container:{
        flex:1,
  
    },

});

export default CategoryScreen;