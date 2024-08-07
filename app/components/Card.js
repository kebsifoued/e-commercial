import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

function Card({title, subTitle, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.imagestyle} source={image} />
            <AppText>{title}</AppText>
            <AppText>{subTitle}</AppText>
        </View>
    );
}
const styles = StyleSheet.create({
    imagestyle:{
        width:"auto",
        height:250
     },
    card:{
       borderRadius:15,
       backgroundColor:colors.white,
       marginBottom:20 
    },
})

export default Card;