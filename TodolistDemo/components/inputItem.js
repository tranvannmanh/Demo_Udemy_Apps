import { StyleSheet, View, TextInput, Pressable, Text, Modal, Image } from 'react-native';
import React, { useState } from 'react'

export function InputItem(props) {
    const [enteredItem, setEnteredItem] = useState('');

    function addItemHandler() {
        props.onAddNew(enteredItem);
        setEnteredItem('');
    }
    
    function cancelModal() {
        props.modal(false);
    }

    return (
        <Modal visible={ props.modalVisible } animationType="slide">
            <View style={styles.input_area}>
                <View style={styles.inside_input_area}>
                    <Image
                        style={styles.Image}
                        source={require('../Image/goal.jpg')}
                        />
                    <TextInput style={styles.TextInput}
                        placeholder='Add new task...'
                        onChangeText={value => setEnteredItem(value)}
                        value={enteredItem}
                        />
                    <View style={styles.some_btn}>
                        <Pressable
                            style={styles.add_btn}
                            onPress={cancelModal}
                            >
                            <Text style={{color: 'white'}}>Cancel</Text>
                        </Pressable>
                        <Pressable
                            style={styles.add_btn}
                            onPress={addItemHandler} 
                            android_ripple={{color: 'white'}}
                            >
                            <Text style={{color: 'white'}}>Add Goal</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    input_area: {
        flex: 1,
        justifyContent: 'center',
        alignItem: 'center',
        paddingHorizontal: 15,
        backgroundColor: '#311e65',
    },

    inside_input_area: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },

    Image: {
        width: 110,
        height: 110,
        marginBottom: 10,
    },

    TextInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#9dc6f4',
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: 'white',
    },

    add_btn: {
        backgroundColor: '#5ecccc',
        justifyContent: 'center',
        width: '20%',
        alignItems: 'center',
        paddingVertical: 5,
    },

    some_btn: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        // padding: 10
    }
})