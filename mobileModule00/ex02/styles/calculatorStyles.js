import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FBF2ED',
    },
    display: {
        color: '#fff',
        fontSize: 48,
        textAlign: 'right',
        marginBottom: 20,        
    },
    expression: {
        fontSize: 32,
        color: '#333',
    },
    result: {
        color: '#234555',
        fontSize: 24,
        textAlign: 'right',
        marginBottom: 10,
    },
    appBarContainer: {
        width: '100%',
        backgroundColor: '#CDD5C6',
        padding: 10,
    },
    appBar:{
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
    },
    titleAppBar: {
        color: '#64786F',
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
    },
    buttonWrapper:{
        width: '22%',
        aspectRatio: 1,
        margin: '1,5%',
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E4E2DD',
    },
    buttonText: {
        fontSize: 24,
        color: '#fff',
    },
});