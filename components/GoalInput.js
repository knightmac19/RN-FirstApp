import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal ] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  }; 

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        placeholder="Add Course Goal" 
        style={styles.courseInput}
        onChangeText={goalInputHandler}
        value={enteredGoal}
        />
      <Button 
        title="Add" 
        style={styles.addButton}
        onPress={() => props.addGoalHandler(enteredGoal)}
      />
      <Button 
        title="X" 
        style={styles.deleteButton}
        onPress={props.clearGoalsHandler}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },

  courseInput: {
    width: '70%',
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10, 
  },

  addButton: {
    
  },

  deleteButton: {

  }
});

export default GoalInput;
