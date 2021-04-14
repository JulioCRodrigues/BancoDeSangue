import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import CadastrarUsuario from '../components/botaoCadastrarUsuario';



export default function Cadastro() {

    const [sexoValue, setSexoValue] = useState('');

    const [tipoValue, setTipoValue] = useState('');

    return (
        <View style={style.colorPage}>

            <View style={style.borderInput}>
                <Text style={style.title}>Nome</Text>
                <TextInput placeholder="Me chamo..." style={style.textInput} />
            </View>


            <View style={style.borderInput}>
                <Text style={style.title}>Email</Text>
                <TextInput placeholder="Meu email é..." />
            </View>


            <View style={style.borderInput}>
                <Text style={style.title}>Sexo</Text>
                <Picker 
                
                style={style.picker}
                selectedValue={sexoValue}
                onValueChange={ (sexoValue) => setSexoValue(sexoValue)}
                >
                    <Picker.Item label="Masculino" value="Masculino"/>
                    <Picker.Item label="Feminino" value="Feminino"/>
                </Picker>
            </View>

            <View style={style.borderInput}>
                <Text style={style.title}>Tipo Sanguíneo</Text>
                
                <Picker

                    style={style.picker}
                    selectedValue={tipoValue}
                    onValueChange={(tipoValue) => setTipoValue(tipoValue)}
                >
                    <Picker.Item label="A" value="A"/>
                    <Picker.Item label="B" value="B"/>
                    <Picker.Item label="AB" value="AB"/>
                    <Picker.Item label="O" value="O"/>
                    <Picker.Item label="RH" value="RH"/>
                </Picker>
            </View>

            <CadastrarUsuario/>
        </View>
    )
}

const style = StyleSheet.create({

    colorPage: {
        flex: 1,
        backgroundColor: '#e2fdff',
        alignItems: 'center',

    },

    borderInput: {

        top: 20,
        borderColor: '#000',
        borderWidth: 2,
        width: 250,
        height: 70,
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },

    textInput: {

        padding: 10
    },

    picker:{
        width: 200,
        height: 45,
        borderColor: 'blue',
        borderWidth: 1,
        alignItems: 'center',
        textAlign: 'center'
    },

    title:{
        marginTop: 15
    }


})

