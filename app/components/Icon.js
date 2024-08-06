import React from 'react';
import { View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
function Icon({name, size=35, backgroundColor="#000", iconColor="#fff"}) {
    return (
        <View style={{
            width: size,
            height: size,
            backgroundColor,
            borderRadius: size /2,
            justifyContent:"center",
            alignItems:"center"
        }}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size*0.5} />
        </View>

    );
}
const styles = StyleSheet.create({
    
})
export default Icon;