import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
  Dimensions
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    if(goalTitle.length === 0) return;
    setCourseGoal(currentGoals => [
      ...currentGoals, {id: Math.random().toString(), value: goalTitle}
    ]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoal(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" style={{borderRadius: 10}} onPress={() => setIsAddMode(true)} />
      <GoalInput 
        visible={isAddMode} 
        onAddGoal={addGoalHandler} 
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList  
        keyExtractor={(item,index) => item.id}
        data={courseGoals}
        renderItem= {itemData =>  
          <GoalItem 
            id={itemData.item.id} 
            onDelete={removeGoalHandler} 
            title={itemData.item.value}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      padding: 50
    }
});
