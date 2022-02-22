import { StyleSheet } from "react-native";
import { borderBottomColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const global = StyleSheet.create({  
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: '2%',
      paddingRight: '2%',
      paddingTop: 10,
      paddingBottom: 10,
    },
    tinyLogo: {
      width: 150,
      height: 150
    },
    backgroundWhite: {
      backgroundColor: '#fff'
    },
    fullHeight: {
      minHeight: '100%',
    },
    title:{
      fontSize: 20
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
  },
  width: {
    width: '80%'
},

});
export default global;