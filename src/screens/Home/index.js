import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';

const Home = ({navigation}) => (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} style={styles.container}>
            
            <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.TouchableOpacity}>
                <Text style={styles.textWhite}>Fazer Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={[styles.TouchableOpacity,]}>
                <Text style={styles.textWhite}>Ir para a tela de rastreio</Text>
            </TouchableOpacity>
        </View>
    );
export default Home;