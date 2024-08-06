import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground
        blurRadius={5}
        style={styles.background}
          source={require("../assets/welcomeScreen.png")}
        >
            <View style={styles.logoContainer}>
               <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
               <Text style={styles.tagline}>Foued MarketPlace</Text>
            </View> 
            <View style={styles.buttonsContainer}>
            <AppButton title="Login" color="primary" onPress={()=>console.log("Tapped")}></AppButton>
            <AppButton title="Register" color="secondary" onPress={()=>console.log("Tapped")}></AppButton>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    tagline:{
        fontSize:25,
        padding:20,
        },
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    buttonsContainer:{
        padding:20,
        width:"100%",
    },
    logo:{
        width:100,
        height:100,
    },
    logoContainer:{
        position:"absolute",
        top:70,
        alignItems:"center"
    }
})

export default WelcomeScreen;