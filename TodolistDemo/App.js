import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button } from "react-native";
import Tasks from './components/renderItems';
import { InputItem } from './components/inputItem';
import { getData, postData } from './components/axios/API';

export default function App() {

    const [Todos, setTodos] = useState([]);
    const [modalIsVisible, setVisibleModal] = useState(false);

    const toggleModal = () => {
        if (modalIsVisible)
            setVisibleModal(false);
        else
            setVisibleModal(true);
    }

    const getTodos = async () => {
        try {
            const res = await getData();
            setTodos(res);
        } catch (error) {
            console.error(error);
        }
    }

    const addNew = async (enteredItem) => {
        try {
            if (enteredItem.trim() != '') {
                const newTodo = {
                    title: enteredItem.trim(),
                    id: Date.now(),
                }
                setVisibleModal(false);
                await postData(newTodo);
                setTodos([...Todos, newTodo]);
            }
            else
                console.log('No task added');
        } catch (error) {
            console.log({
                error_message: error
            })
        }
    }

    useEffect(() => {
        getTodos();
    }, [])

    useEffect(() => {
        console.log(modalIsVisible);
    }, [Todos, modalIsVisible])

    console.log(Todos);
    return (
        <View style={styles.container}>
            <Button
                title='Add New Goal'
                color='#311e65'
                onPress={toggleModal}
            />
            {modalIsVisible && <InputItem modalIsVisible={modalIsVisible} modal={toggleModal} onAddNew={addNew} />}
            <Tasks data={Todos} todosHandler={setTodos}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:10,
    },

    Flatlist: {
        width: '94%',
        backgroundColor: 'lightgray',
    },

})