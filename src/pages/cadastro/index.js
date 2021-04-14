import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Form from '../../components/cadastro';


export default function Cadastro() {


    return (
        <View style={style.colorPage}>

            <Form />
        </View>
    )
}

const style = StyleSheet.create({

    colorPage: {
        flex: 1,
        backgroundColor: '#e2fdff',
        alignItems: 'center',
        
    },

})

