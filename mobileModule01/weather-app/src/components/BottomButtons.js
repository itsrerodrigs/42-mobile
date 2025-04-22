import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from '../styles/weatherAppStyles';

const BottomButtons = ({ activeIndex, onPress}) => {
    const buttons = ['Currently', 'Today', 'Weekly'];

    return (
        <View style={styles.bottomContainer}>
            {buttons.map((label, index) => (
                <TouchableOpacity
                key={index}
                style={[
                    styles.button,
                    activeIndex === index && styles.activeButton
                ]}
                onPress={() => onPress(index)}
                >
                <Text style ={[
                    styles.buttonText,
                    activeIndex === index && styles.activeButtonText
                ]}>
                    {label}
                </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default BottomButtons;