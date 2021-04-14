import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function App() {

    return (
        <View>
          <Text style={style.textTitle}> Banco de <Text style={style.textEffect}>Sangue</Text></Text>
      </View>
    )
}

const style = StyleSheet.create({
  
    textTitle:{
      
      marginTop: 40,
      padding: 30,
      textAlign: 'center',
      color: '#000',
      fontWeight: 'bold',
      fontSize: 25,
      textTransform: 'uppercase',
      fontFamily: 'roboto'
    },
  
    textEffect:{
      color: '#e63946'
    }
  
  })