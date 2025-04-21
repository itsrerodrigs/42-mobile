import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, useWindowDimensions } from "react-native";
import AppBar from "../components/AppBar";
import { styles } from "../styles/calculatorStyles";

export default function CalculatorScreen () {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");
    const { width, height } = useWindowDimensions();

    const handlePress = (label) => {
        console.log("Click on", label);

    };

    const buttons = [
        "AC", "C", "%", "/",
        "7", "8", "9", "*",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        " ", "0", ".", "="
    ];

    return (
        <SafeAreaView style={styles.container}>
            <AppBar title="Calculator" />
            <View style={[styles.containerPai, width < height ? {flexDirection:'column'} : {flexDirection:'row'}]}>
            <View style={[styles.display, styles.displayTextContainer]}>
                <Text style={styles.expression}>{expression || '0'}</Text>
                <Text style={styles.result}>{result || '0'}</Text>
            </View>
            <View style={styles.buttonContainer}>
                {buttons.map((button, index) => (
                    <TouchableOpacity
                    key={index}
                    style={styles.buttonWrapper}
                    onPress={() => handlePress(button)}
                    >
                        <Text style={styles.buttonText}>{button}</Text>
                    </TouchableOpacity>
                ))}
                </View>
            </View>
        </SafeAreaView>
    );
}