import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
        style={styles.background}
          source={require("../assets/welcomeScreen.png")}
        >
            {/* <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View> */}
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1
    },
    loginButton:{
        width:"100%",
        height:70,
        backgroundColor:"#fc5c65"
    },
    loginButton:{
        width:"100%",
        height:70,
        backgroundColor:"#4ecdc4"
    }
})

export default WelcomeScreen;