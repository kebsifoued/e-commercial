import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

function ListScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/viewscreen.png")}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Pants</AppText>
                <AppText>$40</AppText>
                <View style={styles.userContainer}>
                <ListItem
                image={require("../assets/viewscreen.png")}
                title="foued elkebsi"
                subTitle="2 Listings"
                />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    detailsContainer:{
        padding:20,
    },
    image:{
        width:"100%",
        height:300,
    },
    title:{
        fontSize:24,
        fontWeight:"500",
    },
    price:{
        color:"#4ecdc4",
        fontSize:20,
        fontWeight:"bold",
        marginVertical:10,
    },
    userContainer:{
        marginVertical:40,
    }
    
})

export default ListScreen;