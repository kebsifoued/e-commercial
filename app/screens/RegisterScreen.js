import React, { useState } from 'react';
import { Image, StyleSheet, Alert } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import * as Yup from 'yup'
import ErrorMessage from '../components/ErrorMessage';

const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is required'),
    name: Yup.string()
      .required('Name is required'),
  }); 

function RegisterScreen(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState({});
    const [name, setName] = useState();
    
    const handleSubmit = () => {
        // Validate inputs using Yup
        validationSchema.validate({ name, email, password }, { abortEarly: false })
          .then(() => {
            // If validation succeeds
            Alert.alert('Success', 'User Registered');
          })
          .catch((validationErrors) => {
            // If validation fails
            const errorMessages = {};
            validationErrors.inner.forEach((error) => {
              errorMessages[error.path] = error.message;
            });
            setErrors(errorMessages);
          });
      };

    return (
        <Screen style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
        <AppTextInput 
        autoCapitilize 
        autoCorrect={false} 
        // onBlur={()=>setTouched(email)}
        onChangeText={ text => setName(text)}
        icon="" 
        placeholder="User Name" 
        style={{
            borderColor: errors.name ? 'red' : '#ccc',
            borderWidth: errors.name ? 1 : 0,
          }} 
          />
          <ErrorMessage error={errors.name} />
        <AppTextInput 
        autoCapitilize="none" 
        autoCorrect={false} 
        keyboardType="email-address"
        onChangeText={ text => setEmail(text)}
        icon="email" 
        placeholder="Email" 
        style={{
            borderColor: errors.email ? 'red' : '#ccc',
            borderWidth: errors.email ? 1 : 0,
          }} 
          />
          <ErrorMessage error={errors.email} /> 
        <AppTextInput 
        autoCapitilize="none" 
        autoCorrect={false} 
        onChangeText={ text => setPassword(text)}
        icon="lock"
        secureTextEntry={true}
        placeholder="Password" 
        style={{
            borderColor: errors.password ? 'red' : '#ccc',
            borderWidth: errors.password ? 1 : 0,
          }}
        />
        <ErrorMessage error={errors.password} />
        <AppButton title='Register' color="primary" onPress={handleSubmit} ></AppButton>
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
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        marginTop: -10,
        marginLeft: 10,
      },
})

export default RegisterScreen;