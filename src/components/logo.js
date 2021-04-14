import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {

    return (
        <View>
            <TouchableOpacity>
                <Image source={require('../assets/sangue.png')} style={style.doadorImagem} />
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
  
    doadorImagem: {
  
      top: 50,
      height: 110,
      width: '100%',
      resizeMode: 'contain'
    }
  
  })