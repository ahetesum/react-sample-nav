import React from "react";
import {View,Text,StyleSheet, Button} from 'react-native';

const CategoryScreen = props =>{
    return(
        <View style={styles.container}>
            <Text>This is Category  Screen</Text>
            <Button title="Meals" onPress={()=>{
                props.navigation.navigate({
                    routeName:'CategoryMeal'
                });
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

export default CategoryScreen;