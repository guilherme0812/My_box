import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';



const Button = (props) => (
    <TouchableOpacity style={[styles.button, styles.paddingButton]} >
        <Text style={styles.text}> {props.text} </Text>
    </TouchableOpacity>
);
export default Button;