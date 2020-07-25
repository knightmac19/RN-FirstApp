import React from 'react';
import { StyleSheet, TextInput, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput 
          placeholder="Add Course Goal" 
          style={{flex: 1, borderColor: 'black', borderWidth: 1, padding: 10, margin: 10}}/>
        <Button title="+" style={{}}/>
      </View>
      <View />

    </View>
  );
}

const styles = StyleSheet.create({
});
