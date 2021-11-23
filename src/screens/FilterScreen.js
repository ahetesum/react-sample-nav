import React from "react";
import {View,Text,StyleSheet} from 'react-native';

const FilterScreen = props =>{
    return(
        <View style={styles.container}>
            <Text>This is Filter Screen</Text>
        </View>
    );
};

FilterScreen.navigationOptions= navigationData=>{
    console.log(navigationData)

    return {headerTitle:'Filter Meals'};
};


const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
});

export default FilterScreen;