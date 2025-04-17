import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [showFirst, setShowFirst] = useState(true);
  const [counter, setCounter] = useState(0);

  const handlePress = () => {
    const numClicks = counter + 1;
    setCounter(numClicks);
    console.log("The button was clicked", numClicks, "times");
    setShowFirst((prev) => !prev);
    };
  
  const buttonStyle = {
    ...styles.button,
    backgroundColor: showFirst ? "#E6CEED" : "#BEA3D9"
  }

  const message = showFirst ? "It's a button!" : "Hello World!";

    return (
    <View style={styles.container}>
      <TouchableOpacity style={buttonStyle} onPress={handlePress}>
        <Text style={styles.buttonText}>{message}</Text>
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
