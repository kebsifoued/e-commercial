import React, { useState } from 'react';
import { Button, FlatList, Modal, Platform, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';


function AppPicker({icon, onSelectItem, items, selectedItem, placeholder}) {
    const [modalVisible, setModalVisible]= useState(false)
    return (
        <>
        <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
            <AppText style={styles.text}>{selectedItem ? selectedItem.label :placeholder}</AppText>
            <MaterialCommunityIcons name='chevron-down'
            size={20}
            color={colors.medium}
            />
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide" >
            <Screen>
            <Button title='Close' onPress={()=>setModalVisible(false)} />
            <FlatList 
            data={items}
            keyExtractor={item => item.value.toString()}
            // numColumns={4}
            renderItem={({item})=>
            <PickerItem 
            item={item}
            label={item.label}
            onPress={()=>{
                setModalVisible(false)
                onSelectItem(item)
            }}
            />
            }
            />
            </Screen>
        </Modal>
        </>
    );
} 
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        borderRadius:25,
        flexDirection:"row",
        width:"100%",
        padding:15,
        marginVertical:10
    },
    icon:{
        marginRight:10,
    },
    text:{
        flex:1,
    },
    textInput:{
        color:colors.dark,
        fontSize:18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
})

export default AppPicker;