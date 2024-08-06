import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../config/colors';
// import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({title, subTitle, image, ImageComponent , onPress}) {
    return (
        // <Swipeable renderRightActions={renderRightActions}>
        <TouchableOpacity>
        <View style={styles.container}>
            {ImageComponent}
                {image && <Image style={styles.image}></Image>}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                </View>
                {/* <TouchableHighlight onPress={onPress}>
        <View style={styles.deleteContainer}>
            <MaterialCommunityIcons name="trash-can" size={30}  />
        </View>
        </TouchableHighlight> */}
        </View>
        </TouchableOpacity>
        // </Swipeable>
    );
}
const styles = StyleSheet.create({
    container:{
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
        marginLeft:10,
        justifyContent:"center"
    },
    deleteContainer:{
        left:220,
        justifyContent:"center",
        alignItems:"center"

    }
})

export default ListItem;