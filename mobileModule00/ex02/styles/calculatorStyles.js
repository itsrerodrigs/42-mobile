import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FBF2ED',
    },
    containerPai: {
        flex: 1,
    },
    display: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 16,
        width: '100%',
    },
    displayTextContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'flex-end',  
    },
    expression: {
        fontSize: 32,
        color: '#B7BCBF',
        textAlign: 'right',
        marginBottom: 8,
        width: '100%',
    },
    result: {
        fontSize: 48,
        color: '#B7BCBF',
        textAlign: 'right',
        width: '100%',
    },
    appBarContainer: {
        width: '100%',
        backgroundColor: '#CDD5C6',
    },
    appBar: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        backgroundColor: '#CDD5C6',
    },
    titleAppBar: {
        color: '#64786F',
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 12,
        justifyContent: 'center',
        gap: 4,
    },
    buttonWrapper:{
        width: '22%',
        height: '20%',
        borderRadius: 102,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CDD5C6',
    },
    buttonText: {
        fontSize: 28,
        color: '#64786F',
        fontStyle: '',
    },
});