import React, {useState, useEffect} from 'react';
import { Text, View,  BackHandler, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';
import { Profile, Register, Edit } from '../';

const RestrictedArea = ({navigation}) => {
    const Tab = createMaterialBottomTabNavigator();
    
    const [user,setUser] = useState(null)
    useEffect( ()=> {
        async function getuser () {
            let response = await AsyncStorage.getItem('userData')
            let json = JSON.parse(response)
            setUser(json.name)
            
        }
        getuser()
    })

    useEffect(() => {
        const backAction = () => {
          Alert.alert("Ops!", "Voce quer voltar a tela de login?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "CANCELAR"
            },
            { text: "SIM", onPress: () => {
                navigation.navigate('Home')
            }}
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);

    return(
        <Tab.Navigator
            activeColor='#fff'
            inactiveColor='#ffc093'
            barStyle={styles.bar}
        >
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon:()=>(
                        <Icon name="users" size={20} color={'#f5f5f5'} />
                    )
                }}
            />

            <Tab.Screen
                name="Register"
                component={Register}
                options={{
                    tabBarIcon:()=>(
                        <Icon name="archive" size={20} color={'#f5f5f5'} />
                    )
                }}
            />

            <Tab.Screen
                name="Edit"
                component={Edit}
                options={{
                tabBarIcon:()=>(
                    <Icon name="pencil" size={20} color={'#f5f5f5'} />
                )
                }}
            />
            
        </Tab.Navigator>
    )
}
export default RestrictedArea;