import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import MenuAreaRestrita from '../../components/MenuAreaRestrita';

const Profile = ({navigation}) => {
    
    return(
        <View>
            <MenuAreaRestrita title="Editar" navigation={navigation} />
        </View>
    )};
export default Profile;