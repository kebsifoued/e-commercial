import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import ListItem from '../components/ListItem';

const messages=[
    {
        id:1,
        title:"ffff",
        description:"this is",
        image:require("../assets/user.jpg")
    },
    {
        id:2,
        title:"ffff",
        description:"this is",
        image:require("../assets/user.jpg")
    }
]

function MessageScreen(props) {
    return (
        <SafeAreaView style={styles.screen}>
        <FlatList
           data={messages}
           keyExtractor={(message)=> message.id}
           renderItem={({item})=>(
            <ListItem
               title={item.title}
               subTitle={item.description}
               image={item.image}
            />
           )}
        />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen:{
        paddingTop: Platform.OS=== "android"? StatusBar.currentHeight : 0
    }
})

export default MessageScreen;