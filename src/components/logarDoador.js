import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function App() {

    return (
        <View>
            <TouchableOpacity>
                <Text style={style.titleDoador}>Sou um doador!</Text>
            </TouchableOpacity>
        </View>
    )
}


const style = StyleSheet.create({

    titleDoador: {

        fontSize: 28,
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: 20,
        color: '#ef476f',
        fontWeight: 'bold',
        letterSpacing: 1.3


    }

})