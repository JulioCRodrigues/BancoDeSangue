import React from 'react';


import { View, StyleSheet, } from 'react-native';
import Logo from '../../components/logo';
import Title from '../../components/title';
import DoadorLogin from '../../components/logarDoador';
import TitleCadastrar from '../../components/titleCadastrar';
import BtnCadastro from '../../components/btnCadastrese';



export default function Home({navigation}) {

  return (
   
    <View style={style.colorPage}>
      <Logo />
      <Title />
      <DoadorLogin />
      <TitleCadastrar />
      <BtnCadastro />

    </View>
  )
}

const style = StyleSheet.create({

  colorPage: {
    flex: 1,
    backgroundColor: '#e2fdff'
  },


})