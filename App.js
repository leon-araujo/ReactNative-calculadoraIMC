import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  const [peso, setPeso] = useState(''); // armazena o peso
  const [altura, setAltura] = useState(''); // armazena o peso

  function executarCalculos() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    alert ('Seu indice de massa corporal é: ' + imc.toFixed(2));
  }

  return(
    <View style={estilo.container}>
      <Text style={estilo.title}>Calcule seu IMC</Text>

      <TextInput
        style={estilo.input} 
        value={peso}              // valor dentro do componente
        onChangeText={(peso) => setPeso(peso)}       // toda a vez que o campo mudar ele é salvo
        placeholder="Peso (kg)"
        keyboardType='numeric'
      />

      <TextInput
        style={estilo.input} 
        value={altura}              // valor dentro do componente
        onChangeText={(altura) => setAltura(altura)}       // toda a vez que o campo mudar ele é salvo
        placeholder="Altura (cm)"
        keyboardType='numeric'
      />

      <TouchableOpacity onPress={executarCalculos} style={estilo.botao}>
        <Text style={estilo.textBotao}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );
}

const estilo = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },

  title: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30
  },

  input: {
    backgroundColor: '#B10000',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#FFE5DA',
    fontSize: 23
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#007C51',
    padding: 10,
    borderRadius: 10,
  },

  textBotao: {
    color: "#fff",
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Arial'
  }
});