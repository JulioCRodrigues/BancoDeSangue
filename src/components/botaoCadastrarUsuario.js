import React from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';

function teste(){
    Alert.alert('Doador cadastrado!')
}

export default function Cadastro() {


    return (
        <View style={style.colorPage}>

            
                <Button
                    style={style.btnButton}
                    title="Cadastrar doador"
                    color='#000'
                    onPress={teste}
                />
            
            
        </View>
    )
}

const style = StyleSheet.create({

    colorPage: {
        marginTop: 50,
        
        borderWidth: 10,
        borderColor: '#000',
        borderRadius: 5
        
    },

 

})

