import React, {useState} from "react";
import { View ,  Text, StyleSheet, TextInput , TouchableOpacity} from 'react-native';

export default function app() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function executarCalculos() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    if (imc < 18.6) {
      alert('Você esta abaixo do peso - IMC = ' + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      alert('Você esta com o peso ideal - IMC = ' + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      alert('Você está levemente acima do peso - IMC = ' + imc.toFixed(2));
    } else if (imc > 34.9) {
      alert('Você está acima do peso - IMC = ' + imc.toFixed(2));
    }

    setPeso('');    // limpa os campos apos o resutado
    setAltura('');  // limpa os campos apos o resutado
  }

  return (
    <View style={estilo.container}>
      <Text style={estilo.title}>Calcule seu IMC</Text>
      <TextInput
        style={estilo.input}
        value={peso}                             // valor dentro do componente
        onChangeText={ (peso) => setPeso(peso)}  // toda vez que o campo muda ele é salvo
        placeholder="Peso (kg)"
        keyboardType="numeric"
      />

      <TextInput
        style={estilo.input}
        value={altura}                                // valor dentro do componente
        onChangeText={ (altura) => setAltura(altura)} // toda vez que o campo muda ele é salvo
        placeholder="Altura (cm)"
        keyboardType="numeric"
      />
      <TouchableOpacity style={estilo.botao} onPress={executarCalculos}>
        <Text style={estilo.textBotao}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

{/*  ESTILIZAÇÂO DO APP
      ||           ||
      ||           ||
      ||           ||
      \/           \/   */}

const estilo = StyleSheet.create({
  container: {
    flex: 1
  },

  title: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 25
  },

  input: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#000',
    fontSize: 23
  },

  botao: {
    justifyContent: 'center' ,
    alignItems: 'center', 
    margin: 15,
    backgroundColor: '#41AEF4',
    padding: 10,
  },

  textBotao: {
    color: '#fff',
    fontSize: 25
  }
});