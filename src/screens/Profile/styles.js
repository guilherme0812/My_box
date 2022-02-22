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
    
});
export default styles;