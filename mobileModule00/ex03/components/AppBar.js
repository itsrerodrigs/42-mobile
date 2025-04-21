import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { styles } from "../styles/calculatorStyles";

const AppBar = ({ title }) => {
    return (
        <SafeAreaView style={styles.appBarContainer}>
            <View style={styles.appBar}>
                <Text style={styles.titleAppBar}>{title}</Text>
            </View>
        </SafeAreaView>
    );
}

export default AppBar;