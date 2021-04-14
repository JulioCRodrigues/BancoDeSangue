import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';




export default function App() {

const navigation = useNavigation();

    return (
        <View style={style.btnCadastrar}>
            <Button

                onPress={() => navigation.navigate('Cadastro')}
                title="Cadastrar"
                color="#000"

            />

        </View>
    )
}


const style = StyleSheet.create({

    btnCadastrar: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e2fdff'

    }

})