import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';

function ViewScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.addicon}/>
            <View style={styles.deleteicon}/>
            <Image
            resizeMode='contain'
            style={styles.image}
            source={require("../assets/viewscreen.png")}></Image>
        </View>
    );
}
const styles = StyleSheet.create({
    addicon:{
        width:50,
        height:50,
        backgroundColor:colors.primary,
        position:"absolute",
        top:40,
        left:30,
    },
    deleteicon:{
        width:50,
        height:50,
        backgroundColor:colors.secondary,
        position:"absolute",
        top:40,
        right:30,
    },
    container:{
        backgroundColor:colors.black,
        flex:1,
    },
    image:{
        width:"100%",
        height:"100%",
    }
})

export default ViewScreen;