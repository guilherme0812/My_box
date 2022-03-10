import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import MenuAreaRestrita from '../../components/MenuAreaRestrita';

const Profile = ({ navigation }) => {

    return (
        <View style={[styles.fullHeight, styles.backgroundWhite]}>
            <MenuAreaRestrita title="Editar" navigation={navigation} />

            <View style={styles.container}>
                <View style={styles.width}>

                    <TextInput
                        placeholder='Nome do produto'
                        style={styles.inputGray}
                    />
                    <TextInput
                        placeholder='Código do produto'
                        style={styles.inputGray}
                    />

                </View>
            </View>
        </View>
    )
};
export default Profile;