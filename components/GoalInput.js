import React, { useState } from 'react';
import {TextInput, View, Button, StyleSheet, Modal} from 'react-native';
const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.actionButtons}>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={props.onCancel}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler}/>
                    </View>

                </View>
            </View>
        </Modal>
    )    
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginBottom: 10
    },
    actionButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%"
    },
    button: {
        width: '40%'
    }
})

export default GoalInput;