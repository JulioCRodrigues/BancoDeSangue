import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function App() {

    return (
        <View>
            <Text style={style.textCadastrar}> Ainda não é um doador? Cadastre-se!</Text>
        </View>
    )
}

const style = StyleSheet.create({

    colorPage: {
        flex: 1,
        backgroundColor: '#e2fdff'
    },

    textCadastrar: {

        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        marginTop: 10
    }

})