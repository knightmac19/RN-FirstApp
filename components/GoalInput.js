import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  Button, 
  StyleSheet,
  Modal 
} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal ] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  }; 

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal 
      visible={props.isAddMode}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Add Course Goal" 
          style={styles.courseInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button 
              title="CANCEL"
              color="red" 
              onPress={props.onCancel}
            />
          </View>
          <View style={styles.button}>
            <Button 
              title="ADD" 
              onPress={addGoalHandler}
            />
          </View>

          
        </View>


      </View>
    </Modal>

  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },

  courseInput: {
    width: '70%',
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10, 
    marginBottom: 10
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%'
  },

  button: {
    width: '40%'
  }

});

export default GoalInput;
