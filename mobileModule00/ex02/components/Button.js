import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/calculatorStyles";

const Button =({ label, onPress }) => {
    return (
        <TouchableOpacity 
        style={styles.buttonWrapper}
        onPress={onPress}
        >
            <Text 
            style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
};

export default Button;
