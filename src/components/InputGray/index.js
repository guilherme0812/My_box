import React from 'react';
import { Text, View, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

const InputGray = (props) => {
    return(
        <View>
           <TextInput style={styles.inputGray} placeholder={props.placeholder} />
        </View>
    )
}
export default InputGray;