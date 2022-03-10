import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuAreaRestrita from '../../components/MenuAreaRestrita';
import config from '../../../config/config'
import styles from './styles';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

const Register = ({ navigation }) => {

    const address = config.origin
    const [code, setCode] = useState(null)
    const [user, setUser] = useState(null)
    const [product, setProduct] = useState(null)
    const [response, setResponse] = useState(null)

    useEffect(() => {
        getIdUser()
    }, [])

    useEffect(() => {
        randomCode()
        setProduct(null)
    }, [response])

    // Pegar id do usuário
    async function getIdUser() {
        let response = await AsyncStorage.getItem('userData')
        let json = JSON.parse(response)
        setUser(json.id)
    }

    //Gerar um código randômico
    async function randomCode() {
        let result = '';
        let length = 20;
        let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        setCode(result);
    }

    // Envio do formulário
    async function sendForm() {
        let response = await fetch(`${config.urlRoot}create`, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: user,
                code: code,
                product: product,
                local: address
            })
        })
        let json = await response.json()
        setResponse(json)
    }

    //Compartilhar o QRCode
    async function shareQR() {
        const image = config.urlRoot + 'img/code.png';
        FileSystem.downloadAsync(
            image,
            FileSystem.documentDirectory + '.png'
        ).then(({ uri }) => {
            Sharing.shareAsync(uri);
        });
        await Sharing.shareAsync();
    }

    return (
        <View style={[styles.fullHeight, styles.backgroundWhite]}>
            <MenuAreaRestrita title="Registrar" navigation={navigation} />

            <View style={styles.container}>
                <View style={styles.width}>

                    {response && (
                        <View>

                            <Image source={{ uri: response, height: 180, width: 180 }} />
                            <Button title='Compartilhar' onPress={() => shareQR()} />
                        </View>
                    )}

                    <TextInput
                        placeholder='Registrar'
                        style={styles.inputGray}
                        onChangeText={text => { setProduct(text) }}
                        value={product}
                    />
                    <TouchableOpacity style={styles.button} onPress={() => sendForm()} >
                        <Text style={styles.textButton}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};
export default Register;