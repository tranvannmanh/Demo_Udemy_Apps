import React, { useEffect,useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button, Pressable, TouchableOpacity } from "react-native";
import { delData, getData } from './axios/API';

const Items = ({ item }) => {
    return (
        <View style={styles.Item}>
            <Text style={styles.Text}>
                {item}
            </Text>
       </View>
    ) 
}

export default function Tasks({data, todosHandler}) {
    const [selectID, setSelectID] = useState(0);

    const remove_btn = async (id) => {
        try {
            const removed = data.filter(item => item.id === id);
            setSelectID(id);
            await delData(id);
            console.log('Removed item: ', removed);
        } catch (error) {
            console.log(error); 
        }
    }
    
    const loadTodos = async () => {
        todosHandler(data => data.filter(item => item.id !== selectID));
    }

    useEffect(() => {
        loadTodos();
        console.log(selectID);
    }, [selectID])

    const RenderTask = ({ item }) => {
        return (
            <View style={styles.item_container}>
                <Items item={item.title} />
                <TouchableOpacity
                    style={styles.remove_btn}
                    onPress={() => remove_btn(item.id)}
                >
                    <Text style={{color: 'white', fontSize: 18}}>x</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <FlatList
            style={styles.Flatlist}
            data={data}
            renderItem={RenderTask}
            keyExtractor={item => item.id}
        />
    )
}
    
const styles = StyleSheet.create({
    Item: {
        backgroundColor: '#311e65',
        width: '90%',
        height: 30,
        alignItems: 'center',
        flexDirection: 'row',
    },

    Text: {
        color: 'white',
        fontSize: 15,
        paddingLeft: 5
    },

    item_container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 5,
    },

    remove_btn: {
        width: '10%',
        backgroundColor: 'brown',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
    },

    Flatlist: {
        width: '100%',
        marginTop: 10,
    }
})