import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function LoginScreen(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
            <AppTextInput 
            autoCapitilize="none" 
            autoCorrect={false} 
            keyboardType="email-address"
            onChangeText={ text => setEmail(text)}
            icon="email" 
            placeholder="Email" />
            <AppTextInput 
            autoCapitilize="none" 
            autoCorrect={false} 
            onChangeText={ text => setPassword(text)}
            icon="lock"
            secureTextEntry={true}
            placeholder="Password" />
            <AppButton title='Login' color="primary" onPress={()=> console.log(email, password)}></AppButton>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    logo:{
        width: 80, 
        height:80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    }
})
export default LoginScreen;