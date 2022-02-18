import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';
import { Profile, Register, Edit } from '../';

const RestrictedArea = () => {
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

    return(
        <Tab.Navigator
            activeColor='#fff'
            inactiveColor='#ffc093'
            barStyle={styles.bar}
            tabBarOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'green',
                
            }}
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