import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const MenuAreaRestrita = (props) => {
    async function logout() {
        await AsyncStorage.clear()
        navigation.navigate('Login')
    }
    return(
        <View style={[styles.area__menu]}>

            <TouchableOpacity style={styles.button__home2}>
                <Icon name="home" size={30} color={'#222'} style={styles.button__home} onPress={()=>props.navigation.navigate('Home')} />
            </TouchableOpacity>

            <Text style={styles.area__title}> {props.title} </Text>

            <TouchableOpacity>
                <Icon name="sign-out" size={30} color={'#222'} style={styles.button__logout} onPress={()=>logout()} />
            </TouchableOpacity>

        </View>
    )
}
export default MenuAreaRestrita;