import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);

  const handlePress = () => {
    const numClicks = counter + 1;
    setCounter(numClicks);
    console.log("The button was clicked", numClicks, "times");
    };
    return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPressIn={handlePress}>
        <Text style={styles.buttonText}>It's a button!</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#E6CEED',
    padding: 18,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
