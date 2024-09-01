import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        margin: 10,
        backgroundColor: '#eceff1',
        borderRadius: 5,
        height:200
    },
    image: {
        width: 390,
        height: 198,
        backgroundColor: '#eceff1',
    },
    list_title: {
        textAlign: 'right',
        fontSize: 20,
        color: 'white'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  
        justifyContent: 'center',  
        alignItems: 'center', 
        height: 30,
        position: 'absolute',
      },
})