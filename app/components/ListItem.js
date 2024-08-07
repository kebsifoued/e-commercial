import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from '../config/colors';
// import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({title, subTitle, image, ImageComponent}) {
    return (
        <TouchableHighlight>
        <View style={styles.container}>
            {ImageComponent}
                {image && <Image style={styles.image} source={image}></Image>}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                </View>
                <MaterialCommunityIcons name='chevron-right' size={25} />
        </View>
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flexDirection:"row",
        padding:15,
        backgroundColor:colors.white,
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
    },
    title:{
        fontWeight:"600",
    },
    subTitle:{
        color:"#6e6969"
    },
    detailsContainer:{
        flex:1,
        marginLeft:10,
        justifyContent:"center"
    },
})

export default ListItem;