import { StyleSheet } from "react-native";
import {global, colors} from "../../assets/css";

const styles = StyleSheet.create({  
    ...global,
    qr__code:(display='flex') => ({
        width: '100%',
        height: '90%',
        justifyContent: 'center',
        backgroundColor: '#000',
        display: display
    }),
    form: (display='none') => ({
        display: display
    })
});
export default styles;