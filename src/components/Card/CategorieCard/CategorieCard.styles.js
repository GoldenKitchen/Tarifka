import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        //borderWidth: 1,
        margin: 10,
        backgroundColor: '#eceff1',
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
        borderRadius: 5,
        height:100
        
    },
    image: {
        width: 100,
        height: 80,
    },
    categorie_title: {
        padding: 10,
        fontSize: 20,
        color: 'black'
    },
})