import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Home, Login, Tracking} from './src/screens';
import RestrictedArea from './src/screens/RestrictedArea'

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "My Box",
            headerTintColor: "#333",
            headerTitleStyle: {
              fontWeight: 'bold',
              alignSelf: 'center'
            },
            headerStyle: {
              backgroundColor: '#f58634',
            },
        }} />

        <Stack.Screen name="Tracking" component={Tracking} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />

        <Stack.Screen name="RestrictedArea" component={RestrictedArea} options={{headerShown:false}} />
      </Stack.Navigator>
  </NavigationContainer>
);

export default App;