import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/weatherAppStyles';

const SearchBar = ({ searchText, setSearchText }) => {
    return (
    <View style={styles.searchContainer}>
        <TextInput
        style={styles.inputSearch}
        placeholder="Pesquisar..."
        placeholderTextColor="#888"
        value={searchText}
        onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.geoButton} onPress={() => 
            console.log('Geolocalização')}>
                <Ionicons name='location-outline' size={24} color= '#333' />
            </TouchableOpacity>
        </View>
    );
};

export default SearchBar;