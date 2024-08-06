import React from 'react';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import {FlatList, StyleSheet, View} from 'react-native';
import colors from '../config/colors';
import Icon from '../components/Icon';
menuItem = [
    {
        title:"My Listings",
        icon:{
            name:"format-list-bulleted",
            backgroundColor: colors.primary,

        }
    },
    {
        title:"My Messages",
        icon:{
            name:"email",
            backgroundColor: colors.secondary,

        }
    }
]
function AccountScreen(props) {
    return (
        <Screen>
            <View style={styles.container}>
                 <ListItem title='foued' subTitle='software' image={require("../assets/user.jpg")} />
            </View>
            <View style={styles.container}>
                 <FlatList data={menuItem} 
                 keyExtractor={menuItem => menuItem.title} 
                 renderItem={({item})=> 
                    <ListItem
                    title={item.title}
                    ImageComponent={
                        <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                    }
                    />
                }
                 />
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        marginVertical:20,
    }
})

export default AccountScreen;