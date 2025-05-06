import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/weatherAppStyles';

const BottomButtons = ({ activeIndex, onPress}) => {
    const buttons = [
        {'label': 'Currently', icon: 'sunny' },
        {'label': 'Today', icon: 'calendar-outline' },
        {'label': 'Weekly', icon: 'calendar' }
    ]; 

    return (
        <View style={styles.bottomContainer}>
            {buttons.map((btn, index) => (
                <TouchableOpacity
                key={index}
                style={[
                    styles.button,
                    activeIndex === index && styles.activeButton
                ]}
                onPress={() => onPress(index)}
                >
                    <Ionicons
                    name={btn.icon}
                    size={20}
                    color={activeIndex === index ? '#000' : '#333'}
                    style={{ marginBottom: 4 }}
                    />
                <Text style ={[
                    styles.buttonText,
                    activeIndex === index && styles.activeButtonText
                ]}>
                    {btn.label}
                </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default BottomButtons;