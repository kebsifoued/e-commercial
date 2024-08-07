import React from 'react';
import { FlatList , StyleSheet} from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listings=[
    {
        id:1,
        title: "bike",
        price: 120,
        image: require('../assets/bike.jpg')
    },
    {
        id:2,
        title: "motocycle",
        price: 1200,
        image: require('../assets/motocycle.jpg')
    },
    {
        id:3,
        title: "Kawasaki",
        price: 4200,
        image: require('../assets/Kawasaki.jpg')
    }
]

function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
            data={listings}
            keyExtractor={listing=>listing.id.toString()}
            renderItem={({item})=>
            <Card 
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            />
            }
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor:colors.light,
    }
})

export default ListingsScreen;