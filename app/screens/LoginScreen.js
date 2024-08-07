import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup'
import { Formik } from 'formik';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required(),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required(),
  });

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
            <Formik
            initialValues={{email:'', password:''}}
            onSubmit={values=> console.log(values)}
            validationSchema={validationSchema}
            >
              {()=>(
                <>
                <AppFormField 
                name="email"
              autoCapitilize="none" 
              autoCorrect={false} 
              keyboardType="email-address"
              icon="email" 
              placeholder="Email"  />
              <AppFormField 
              name="password"
              autoCapitilize="none" 
              autoCorrect={false} 
              icon="lock"
              secureTextEntry={true}
              placeholder="Password" 
              />
              <SubmitButton title='login' />
                </>
              )}
            </Formik>
              
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