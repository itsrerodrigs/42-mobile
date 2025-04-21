import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, useWindowDimensions } from "react-native";
import AppBar from "../components/AppBar";
import { styles } from "../styles/calculatorStyles";

export default function CalculatorScreen () {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");
    const [lastPressed, setLastPressed] = useState ("");
    const { width, height } = useWindowDimensions();

    const handlePress = (label) => {
        const operators = ['+', '-', '*', '/'];

        console.log("Click on", label);

        if (label === 'AC') {
            setExpression("0");
            setResult("");
            return;
        }

        if (label === "C") {
            setExpression((prev) => {
                const updated = prev.slice(0, -1);
                return updated === "" ? "0" : updated;
        });
        return;
    }

        if (label === "=") {
            try {
                const evalResult = eval(expression);
                setResult(evalResult.toString());
            } catch (error) {
                setResult("Erro");
            }
            return;
        }

        if (label === "%") {
            try {
                const percent = eval(expression) / 100;
                setResult(percent.toString());
            } catch (error) {
                setResult("Erro");
            }
            return;
        }

        const lastChar = expression.slice(-1);
        
        if (operators.includes(label)) {
            if (expression.includes === "" && label !== "-"){
                return;
            }
            if (operators.includes(lastChar) && label !== '-') {
                return;
            }
        }

        // block dup operations
        if (label === "." && (lastChar === "." 
            || expression === "")) return;

        if (label === "0" && label !== "." && !operators.includes(label)){
            setExpression(label);
            return;
        }        

        setExpression((prev) => prev + label);
        setLastPressed(label);

    };

    const buttons = [
        "AC", "C", "%", "/",
        "7", "8", "9", "*",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        null, "0", ".", "="
    ];

    return (
        <SafeAreaView style={styles.container}>
            <AppBar title="Calculator" />
            <View style={[styles.containerCalculator, width < height ? {flexDirection:'column'} : {flexDirection:'row'}]}>
            <View style={[styles.display, styles.displayTextContainer]}>
                <Text style={styles.expression}>{expression || '0'}</Text>
                <Text style={styles.result}>{result || '0'}</Text>
            </View>
            <View style={styles.buttonContainer}>
                {buttons.map((button, index) => (
                    button ? (
                    <TouchableOpacity
                    key={index}
                    style={styles.buttonWrapper}
                    onPress={() => handlePress(button)}
                    >
                        <Text style={styles.buttonText}>{button}</Text>
                    </TouchableOpacity>
                ) : (
                    <View key={index}
                    style={styles.buttonWrapper} />
                )
                
                ))}
                </View>
            </View>
        </SafeAreaView>
    );
}