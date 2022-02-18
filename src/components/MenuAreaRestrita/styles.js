import { StyleSheet } from "react-native";
import {global, colors} from "../../assets/css";

const styles = StyleSheet.create({  
    ...global,
    area__menu: {
        flexDirection: 'row',
        paddingTop: 40,
        paddingBottom: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderBottomColor: '#222',
        borderBottomWidth: 1
    },
    area__title: {
        marginTop: 20,
        width: '80%',
        textAlign: 'center',
        fontSize: 15
    }
});
export default styles;