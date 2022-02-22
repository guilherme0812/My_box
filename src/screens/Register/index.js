import React, {useState,useEffect} from 'react';
import { Text, View, TouchableOpacity, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuAreaRestrita from '../../components/MenuAreaRestrita';
import config from '../../../config/config'
import styles from './styles';

const Register = ({navigation}) => {
    
    const address = config.origin
    const [code, setCode] = useState(null)
    const [user, setUser] = useState(null)
    const [product, setProduct] = useState(null)
    const [response, setResponse] = useState(null)

    useEffect( () =>{
        getIdUser()
    },[])

    useEffect( () =>{
        randomCode()
    },[])

    // Pegar id do usuário
    async function getIdUser() {
        let response = await AsyncStorage.getItem('userData')
        let json = JSON.parse(response)
        setUser(json.id)
    }

    //Gerar um código randômico
    async function randomCode(){
        let result = '';
        let length=20;
        let chars='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        setCode(result);
    }

    // Envio do formulário
    async function sendForm() {
        let response = await fetch(`${config.urlRoot}create`,{
            method: 'post',
            headers:{
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

    return(
        <View style={[styles.fullHeight, styles.backgroundWhite]}>
            <MenuAreaRestrita title="Registrar" navigation={navigation} />

            <View style={styles.container}>
                <View style={styles.width}>
                    
                    <TextInput  placeholder='Registrar' style={styles.inputGray} onChangeText={text => {setProduct(text)}} />
                    <TouchableOpacity style={styles.button}  onPress={()=>sendForm()} >
                        <Text style={styles.textButton}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )};
export default Register;