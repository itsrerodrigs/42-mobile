import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2B279',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    inputSearch: {
        flex: 1,
        paddingVertical: 8,
        fontSize: 16,
        color: '#333',
    },
    geoButton: {
        padding: 8,
    },
    bottomContainer: {
        flexDirection: 'flex-end',
        justifyContent: 'space-around',
        backgroundColor: 'blue',
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#e0e'
    },
    activeButton: {
        backgroundColor: '#4a90e2',
    },
    buttonText: {
        color: '#333',
        fontSize: 16,
    },
    activeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    pageCurrently: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4a4a',
    }
});
