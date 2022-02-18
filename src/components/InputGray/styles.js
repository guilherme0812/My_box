import { StyleSheet } from "react-native";
import {global, colors} from "../../assets/css";

const styles = StyleSheet.create({  
    ...global,
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
      login__button: {
        padding: 12,
        backgroundColor: colors.orange,
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 10
      },
});
export default styles;