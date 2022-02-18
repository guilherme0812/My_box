import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, View, Image, TextInput, TouchableOpacity, Text, Platform, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as LocalAuthentication from 'expo-local-authentication';

import styles from './styles';

const Login = ({navigation}) => {
    
    const [display, setDisplay] = useState('none');
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [login, setLogin] = useState(false);

    useEffect( ()=> {
        verifyLogin()
    },[])
    useEffect(()=> {
        if (login == true) {
            biometric()
        }
    },[login])

    // Verificar se o usuário já possui login
    async function verifyLogin() {
        let response = await AsyncStorage.getItem('userData')
        let json = JSON.parse(response)
        console.log (json)
        if (json !== null) {
            setUser(json.name)
            setPassword(json.password)
            setLogin(true)
        }
    }

    // Função de biometria
    async function biometric() {
        let compatible = await LocalAuthentication.hasHardwareAsync()
        if ( compatible ) {
            let biometricRecords = await LocalAuthentication.isEnrolledAsync()
            if (!biometricRecords) {
                alert('Biometria não cadastrada')
            } else {
                let result = await LocalAuthentication.authenticateAsync()
                console.log('teste')

                // Se a biometria estiver correta
                if(result.success) {
                    sendForm()
                    console.log('Login sucesso')
                } else {
                    setUser(null)
                    setPassword(null)
                    alert('Biometria não cadastrada')
                }
            }
        }
    }
    

    // Envio de dados ao backend
    async function sendForm() {
        let response = await fetch('http://192.168.0.5:3000/login', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: user,
              password: password
            })
        });

        let json = await response.json();
        if (json == 'error') {
            setDisplay('flex')
            setTimeout( ()=> {
                setDisplay('none')
            }, 5000)
            await AsyncStorage.clear()
        } else {
            let userdate = await AsyncStorage.setItem('userData', JSON.stringify(json))
            navigation.navigate('RestrictedArea')
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>

            <View>
                <Image source={require('../../assets/img/icon.png')} style={[styles.tinyLogo, styles.login__logo]} />
                <Text>{user} - {password}</Text>
            </View>

            <View>
                <Text style={styles.login__msg(display)}>Usuário ou senha invalidos</Text>
            </View>

            <View style={styles.login__form}>
                <TextInput style={styles.login__input} placeholder='Usuário' onChangeText={text => setUser(text)} />
                <TextInput style={styles.login__input} placeholder='Senha' secureTextEntry={true} onChangeText={text => setPassword(text)} />
                <TouchableOpacity style={styles.login__button} onPress={()=> sendForm()}>
                    <Text style={styles.login__buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
};
export default Login;