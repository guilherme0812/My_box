import { StyleSheet } from "react-native";
import {global, colors} from "../../assets/css";


const styles = StyleSheet.create({
    ...global,
    login__logo: {
      marginBottom: 15
    },
    login__msg:(text='none') => ({
      color: 'red',
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 15,
      display: text
    }),
    login__form: {
      width: '80%'
    },
    login__input: {
      fontSize: 19,
      marginBottom: 15,
      paddingBottom: 7,
      paddingTop: 7,
      paddingLeft: 13,
      paddingRight: 13,
      backgroundColor: '#f5f5f5',
      borderRadius: 10
    }, 
    login__button: {
      padding: 12,
      backgroundColor: colors.orange,
      alignSelf: 'center',
      borderRadius: 5,
      marginTop: 10
    },
    login__buttonText: {
      color: '#000'
    }
});
export default styles;