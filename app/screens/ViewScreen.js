import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons"

function ViewScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeicon}>
                <MaterialCommunityIcons name='close' color="white" size={35} />
            </View>
            <View style={styles.deleteicon}>
                <MaterialCommunityIcons name='trash-can-outline' color="white" size={35} />

            </View>
            <Image
            resizeMode='contain'
            style={styles.image}
            source={require("../assets/viewscreen.png")}></Image>
        </View>
    );
}
const styles = StyleSheet.create({
    closeicon:{
        position:"absolute",
        top:40,
        left:30,
    },
    deleteicon:{
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