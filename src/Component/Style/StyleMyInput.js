import {
    StyleSheet
} from 'react-native'

const StylesMyInput = StyleSheet.create({
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 300,
        height: 48,
        backgroundColor: '#fff',
        borderColor: '#D6D6D6',
        borderWidth: 1,
        borderRadius: 150,
        marginBottom: 15,
    },
    input: {
        marginLeft:18,
        marginRight: 'auto',
        width: 210,
    },
    iconLogin: {
        marginLeft: 18,
    },
    error: {
        marginTop: -12,
        marginBottom: 3,
    },
    errorText: {
        color: 'red',
        fontSize: 14
    },
    borderWaring: {
        borderColor: 'red'
    },
    borderNomal: {
        borderColor: '#D6D6D6'
    },
    displayNone: {
        display: 'none'
    },
    displayFlex: {
        display:'flex'
    },
})


export {StylesMyInput}