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
    }

});
export default global;