import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Button, 
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const onAddGoal = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {
        id: Math.random().toString(), 
        value: goalTitle
      }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelAddGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput 
        onAddGoal={onAddGoal}
        isAddMode={isAddMode}
        onCancel={cancelAddGoalHandler}
      />
        
      <View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem 
              goal={itemData.item.value} 
              id={itemData.item.id}
              onDelete={removeGoalHandler}
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