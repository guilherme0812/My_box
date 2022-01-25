import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';



const Button = (props) => (
    <View style={[styles.paddingButton]}>
        <Text style={styles.text}> Ir para a tela de {props.tela} </Text>
    </View>
);
export default Button;