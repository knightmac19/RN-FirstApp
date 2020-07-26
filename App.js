import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

  
  
  const clearGoalsHandler = () => {
    setCourseGoals([]);
  }

  const addGoalHandler = goalTitle => {
    
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {
        key: Math.random().toString(), 
        value: goalTitle
      }
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput 
        addGoalHandler = {addGoalHandler}
        clearGoalsHandler = {clearGoalsHandler}
      />
        
      <View>
        <FlatList
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem 
              goal = {itemData.item.value} 
              onDelete={() => console.log("onDelete")}
            />
          )}  
        />
      </View>

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

  }
  

});