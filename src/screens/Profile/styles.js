import { StyleSheet } from "react-native";
import {global, colors} from "../../assets/css";

const styles = StyleSheet.create({  
    ...global,
    profileContainer: {
        padding: 15
    },
    login__form: {
        width: '80%'
    },
    title__form: {
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    inputGray: {
        fontSize: 15,
        marginBottom: 15,
        paddingBottom: 7,
        paddingTop: 7,
        paddingLeft: 13,
        paddingRight: 13,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        width: '100%',
    },
    button: {
        marginTop: 15,
        marginBottom: 15,
        paddingBottom: 7,
        paddingTop: 7,
        paddingLeft: 13,
        paddingRight: 13,
        backgroundColor: '#222',
        borderRadius: 10,
        width: '100%',
    },
    textButton: {
        color: '#fff',
        textAlign: 'center'
    }
});
export default styles;