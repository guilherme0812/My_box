import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, View, Image, TextInput, TouchableOpacity, Text, Platform } from 'react-native';

import styles from './styles';

const Login = () => {

    const [display, setDisplay] = useState('none');

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>

            <View>
                <Image source={require('../../assets/img/icon.png')} style={[styles.tinyLogo, styles.login__logo]} />
            </View>

            <View>
                <Text style={styles.login__msg(display)}>Usuário ou senha invalidos</Text>
            </View>

            <View style={styles.login__form}>
                <TextInput style={styles.login__input} placeholder='Usuário' />
                <TextInput style={styles.login__input} placeholder='Senha' secureTextEntry={true} />
                <TouchableOpacity style={styles.login__button} onPress={()=> setDisplay('flex')}>
                    <Text style={styles.login__buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
};
export default Login;