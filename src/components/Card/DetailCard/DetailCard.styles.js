import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 10,
    },

    image: {
        height: 280,
        width: 'auto',
        flex: 1,
    },

    meal_title: {
        fontSize: 30,
        fontWeight: '800',
        color: '#a52b2b'
    },

    meal_area: {
        fontSize: 20,
        fontWeight: '600',
        color: '#a52b2b',
        borderBottomWidth: 2,
        borderBottomColor: '#cccccc'

    },

    meal_int: {
        color: 'black'
    },

    button_container: {
        margin: 10,
        borderRadius: 10,
        height: 45,
        backgroundColor: '#ff0000',
        alignItems: 'center',
        justifyContent: 'center',
    }
})