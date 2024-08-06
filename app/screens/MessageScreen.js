import React ,{ useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';

const initialMessages=[
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
    const [messages, setMessages]=useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false)
    const handleDelete= message =>{
        const newMessages=messages.filter(m=>m.id !== message.id)
        setMessages(messages.filter(m=>m.id !== message.id))
    }
    return (
        <Screen>
        <FlatList
           data={messages}
           keyExtractor={(message)=> message.id}
           renderItem={({item})=>(
            <ListItem
               title={item.title}
               subTitle={item.description}
               image={item.image}
               onPress={()=>handleDelete(item)}
            />
           )}
           ItemSeparatorComponent={()=>
            <View
            style={
                {
                    width:"100%",
                    height:1,
                    backgroundColor:"#f8f4f4"

                }
            }
            />
           }
           refreshing={refreshing}
           onRefresh={()=>{
            setMessages([
                {
                    id:2,
                    title:"ffff",
                    description:"this is",
                    image:require("../assets/user.jpg")
                }
            ])
           }}
        />
        </Screen>
    );
}
const styles = StyleSheet.create({

})

export default MessageScreen;