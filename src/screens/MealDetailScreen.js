import React from "react";
import {View,Text,StyleSheet, Button} from 'react-native';

const MealDetailScreen = props =>{
    return(
        <View style={styles.container}>
            <Text>This is Meal Detail Screen</Text>
            <Button title="Go Back" onPress={()=>{
                props.navigation.popToTop();
                //Clar Top
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

export default MealDetailScreen;