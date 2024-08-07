import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputListing({imageUris=[], onRemoveImage, onAddImage}) {
    return (
        <ScrollView horizontal>
        <View style={styles.container}>
            {imageUris.map(uri=>
            <View key={uri} style={styles.image}>
                <ImageInput imageUri={uri} onChangeImage={()=>onRemoveImage(uri)}/>
            </View>
            )}
            <ImageInput onChangeImage={(uri)=>onAddImage(uri)}/>
        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },
    image:{
        marginRight:10,
    }
})
export default ImageInputListing;