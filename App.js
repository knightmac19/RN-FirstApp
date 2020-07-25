import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal ] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  }; 
  
  const clearGoalsHandler = () => {
    setCourseGoals([]);
  }

  const addGoalHandler = () => {
    
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}]);
    // setCourseGoals([]);
    setEnteredGoal('');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Add Course Goal" 
          style={styles.courseInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
          />
        <Button 
          title="+" 
          style={styles.addButton}
          onPress={addGoalHandler}
        />
        <Button 
          title="X" 
          style={styles.deleteButton}
          onPress={clearGoalsHandler}
        />

      </View>
        <FlatList
          data={courseGoals}
          renderItem={itemData => (
            <View style={styles.listItem}>
              <Text >{itemData.item.value}</Text>
            </View>
          )}  
        />

      <View />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    
  },
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

  },
  listItem: {
    width: '85%',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }

});