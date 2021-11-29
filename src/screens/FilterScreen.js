import { Ionicons } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import {View,Text,StyleSheet, TouchableOpacity, Switch} from 'react-native';
import COLORS from "../constants/Colors";
import Dimens from "../constants/Dimens";


const FilterSwitch=(props)=>{
    return(
        <View style={styles.itemContainer}>
            <Text style={styles.normalText}>{props.label}</Text>
            <Switch
                thumbColor= {COLORS.accentColor}
                trackColor={{true:COLORS.primaryDarkColor,false:COLORS.dividerColor}}  
                value={props.sValue} 
                onValueChange={props.onSwitchChange}/>
        </View>
    );
};


const FilterScreen = props =>{

    const {navigation} = props;
    const [isGlutenFree,setIsGlutenFree] = useState(false);
    const [isLactoseFree,setIsLactoseFree] = useState(false);
    const [isVegan,setIsVegan] = useState(false);
    const [isVegitarian,setIsVegitarian] = useState(false);


    const saveFilters= useCallback(()=>{
       const appliedFilters={
            glutenFree:isGlutenFree,
            lactoseFree:isLactoseFree,
            vegan:isVegan,
            vegitarian:isVegitarian
        };

        console.log(appliedFilters);
    },[isVegan,isGlutenFree,isLactoseFree,isVegitarian]);

    useEffect(()=>{
        props.navigation.setParams({save:saveFilters})
    },[saveFilters]);

    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Available Filters / Restrictions</Text>
            <FilterSwitch label="Gluten-Free" sValue={isGlutenFree} onSwitchChange={newValue=>setIsGlutenFree(newValue)} />
            <FilterSwitch label="Lactose-Free" sValue={isLactoseFree} onSwitchChange={newValue=>setIsLactoseFree(newValue)} />
            <FilterSwitch label="Vegan" sValue={isVegan} onSwitchChange={newValue=>setIsVegan(newValue)} />
            <FilterSwitch label="Vegitarian" sValue={isVegitarian} onSwitchChange={newValue=>setIsVegitarian(newValue)} />

        </View>
    );
};

 FilterScreen.navigationOptions= navData =>{
    return {
        headerLeft: <TouchableOpacity><Ionicons onPress={()=>{
            //navData.navigation.openDrawer();
            navData.navigation.toggleDrawer();
        }} name='ios-menu' style={{marginHorizontal:10}} size={25} color={COLORS.whiteColor} /></TouchableOpacity>,
   
        headerRight: <TouchableOpacity><Ionicons onPress={()=>{
            navData.navigation.getParam('save')();
        }} name='ios-save' style={{marginHorizontal:10}} size={25} color={COLORS.whiteColor} /></TouchableOpacity>,
   
    };
};

const styles= StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        // alignItems:'center'
    },
    titleText:{
        fontSize: Dimens.xlarge,
        fontWeight:'800',
        marginHorizontal:16,
        marginVertical:16,
    },
    itemContainer:{
        marginHorizontal:8,
        marginVertical:8,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    normalText:{
        fontSize: Dimens.large,
        fontWeight:'400',
        marginHorizontal:8,
        marginVertical:8,
    },
});

export default FilterScreen;