import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

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
        backgroundColor:"#fc5c65",
        position:"absolute",
        top:40,
        left:30,
    },
    deleteicon:{
        width:50,
        height:50,
        backgroundColor:"#4ecdc4",
        position:"absolute",
        top:40,
        right:30,
    },
    container:{
        backgroundColor:"#000",
        flex:1,
    },
    image:{
        width:"100%",
        height:"100%",
    }
})

export default ViewScreen;