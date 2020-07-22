import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [hello, setHello] = useState(true)
  const [goodbye, setGoodbye] = useState(false)
  const [output, setOutput] = useState('Press me!');

  const toggle = () => {
    if (hello) {
      setOutput('Hello World!');
      setHello(false);
      setGoodbye(true);
    } else {
      setOutput('Goodbye World!');
      setHello(true);
      setGoodbye(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text >{output}</Text>
      <Button title="Change Text" onPress={() => toggle()} />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
