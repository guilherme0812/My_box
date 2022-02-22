import React, {useState, useEffect} from 'react';
import { Text, View, TextInput ,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import config from '../../../config/config'

import styles from './styles';
import MenuAreaRestrita from '../../components/MenuAreaRestrita';


const Profile = ({navigation}) => {
    const [idUser, setIdUser] = useState(null)
    const [senhaAntiga, setSenhaAntiga] = useState(null)
    const [novaSenha, setNovaSenha] = useState(null)
    const [confNovaSenha,setConfNovaSenha] = useState(null)
    const [msg,setMsg] = useState(null)

    //Pegar id do usuário
    useEffect(()=>{
        async function getIdUser() {
            let response = await AsyncStorage.getItem('userData')
            const json = JSON.parse(response)
            setIdUser(json.id)
        }
        getIdUser()
    },[])
    
    //Envio dos dados
    async function sendForm() {
        let response = await fetch(`${config.urlRoot}verifyPass`,{
            method: 'post',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: idUser,
                senhaAntiga: senhaAntiga,
                novaSenha: novaSenha,
                confNovaSenha: confNovaSenha
            })
        })
        let json = await response.json()
        setMsg(json)
    }
    
    return(
        <View style={[styles.fullHeight, styles.backgroundWhite]}>
            <MenuAreaRestrita title='Sair' navigation={navigation} />

            <View style={styles.container}>
                <View style={styles.width}>
                    <Text> {msg} </Text>
                    <Text style={[styles.title, styles.title__form]}>Alterar Senha</Text>

                    <TextInput style={styles.inputGray} placeholder={'Senha antiga'} onChangeText={(text)=>setSenhaAntiga(text)} />
                    <TextInput style={styles.inputGray} placeholder={'Nova senha'} onChangeText={(text)=>setNovaSenha(text)} />
                    <TextInput style={styles.inputGray} placeholder={'Conf. nova senha'} onChangeText={(text)=>setConfNovaSenha(text)} />
                    
                    <TouchableOpacity style={[styles.button, styles.paddingButton]} onPress={()=>sendForm()}>
                        <Text style={styles.textButton}> Mudar de senha </Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )};
export default Profile;