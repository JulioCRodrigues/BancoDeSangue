import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { View, StyleSheet, Alert, } from 'react-native';
import Home from './pages/home';
import Cadastro from './pages/cadastro';

const Stack = createStackNavigator();


export default function Sangue() {

  return (
    <NavigationContainer style={style.colorPage}>

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerStyle: {
              backgroundColor:'#000'
            },
            headerTintColor: '#FFF'
            
          }}
          component={Home}

        />

        <Stack.Screen
          name="Cadastro"
          component={Cadastro}

        />
      </Stack.Navigator>


    </NavigationContainer>
  )
}

const style = StyleSheet.create({

  colorPage: {
    flex: 1,
    backgroundColor: '#e2fdff'
  },


})