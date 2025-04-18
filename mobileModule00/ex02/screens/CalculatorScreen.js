import React, { useState } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import AppBar from "../components/AppBar";
import { styles } from "../styles/calculatorStyles";

export default function CalculatorScreen () {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");

    const handlePress = (label) => {
        console.log("Click on", label);

    };

    const buttons = [
        "AC", "C", "/", "*",
        "7", "8", "9", "-",
        "4", "5", "6", "+",
        "1", "2", "3", "=",
        "0", "."
    ];

    return (
        <SafeAreaView style={styles.container}>
            <AppBar title="Calculator" />
            
            <View style={styles.display}>
                <Text style={styles.expression}>{expression}</Text>
                <Text style={styles.result}>{result}</Text>
            </View>
            
            <View style={styles.buttonContainer}>
                {buttons.map((button, index) => (
                    <View key={index}
                    style={styles.buttonWrapper}>
                        <Button 
                        title={button}
                        onPress={() => handlePress(button)}
                        />
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
}