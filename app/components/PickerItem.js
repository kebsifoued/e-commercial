import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

function PickerItem({item, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={70}/>
            <AppText style={styles.text}>{item.label}</AppText>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    text:{
        padding:20,
        marginTop:5
    },
    container:{
        paddingHorizontal:20,
        paddingVertical:15,
        alignItems:"center"
    }
})

export default PickerItem;