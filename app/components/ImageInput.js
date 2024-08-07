import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';

function ImageInput({imageUri, onChangeImage}) {
    useEffect(()=>{
        requesstPermission();
    },[]);
    const requesstPermission = async ()=>{
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        if(!granted) alert("You need to enable permission to access to images!")
    }

    const handlePress=()=>{
        if(!imageUri) selectImages();
        else Alert.alert("Delete", "Are you sure you want to delete this image ?", [
            {text: 'Yes', onPress:()=> onChangeImage(null)},
            {text : 'No'}
        ])
    }

    const selectImages=async()=>{
        try{
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality:0.5,

            })
            if(!result.canceled) onChangeImage(result.uri)
        }catch(error){
            console.log("error selecting an image", error)
        }
    }
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
            {!imageUri && (<MaterialCommunityIcons  color={colors.medium} name="camera" size={40} />) }
            {imageUri && ( <Image source={{uri : imageUri}} style={styles.image} /> )}
        </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center",
        height:100,
        width:100,
        overflow:"hidden"
    },
    image:{
        width:"100%",
        height:"100%",
    }
})

export default ImageInput;