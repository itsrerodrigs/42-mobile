import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: '#f1f1f1',
        borderRadius: 25,
        margin: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    inputSearch: {
        flex: 1,
        height: 40,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#000',
    },
    geoButton: {
        marginLeft: 10,
        padding: 6,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: 'blue',
        backgroundColor: '#f9f9f9'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    activeButton: {
        backgroundColor: '#D9D9D9',
        borderRadius: 6,    
    },
    buttonText: {
        fontSize: 16,
        color: '#333',
    },
    activeButtonText: {
        color: '#000',
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
