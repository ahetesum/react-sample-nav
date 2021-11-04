import React from "react";
import {View,Text,StyleSheet, Button} from 'react-native';

const CategoryMealScreen = props =>{
    return(
        <View style={styles.container}>
            <Text>This is Category Meal Screen</Text>
            <Button title="Details" onPress={()=>{
                props.navigation.navigate({
                    routeName:'MealDetail'
                });
            }} />
            <Button title="Go Back" onPress={()=>{
                props.navigation.goBack();
                //props.navigation.pop();
            }} />
        </View>
    );
};

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
});

export default CategoryMealScreen;