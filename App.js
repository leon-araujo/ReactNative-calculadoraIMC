import React, {useState} from "react";
import { View ,  Text, StyleSheet, TextInput , TouchableOpacity, Picker} from 'react-native';

export default function app() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState("Masculino");


  function executarCalculos() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    if (altura == '' || peso == '') { // verifica se os campos estão vazios
      alert('UM OU MAIS CAMPOS ESTÃO VAZIOS');
    } else {
      if (sexo == 'Masculino') { // faz o calculo do IMC Macsulino
        if (imc < 20.7) {
          alert('Você esta abaixo do peso - IMC = ' + imc.toFixed(2));
        } else if (imc >= 20.7 && imc < 26.4) {
          alert('Você esta com o peso ideal - IMC = ' + imc.toFixed(2));
        } else if (imc >= 26.5 && imc < 27.8) {
          alert('Você está levemente acima do peso - IMC = ' + imc.toFixed(2));
        } else if (imc >= 27.8 && imc < 31.1) {
          alert('Você está acima do peso - IMC = ' + imc.toFixed(2));
        } else if (imc > 31.1 ) {
          alert('Você está obeso - IMC = ' + imc.toFixed(2));
        }
      } else if (sexo == 'Feminino') { // faz o calculo do IMC Feminino
        if (imc < 19.1) {
          alert('Você esta abaixo do peso - IMC = ' + imc.toFixed(2));
        } else if (imc >= 19.1 && imc < 25.9) {
          alert('Você esta com o peso ideal - IMC = ' + imc.toFixed(2));
        } else if (imc >= 25.9 && imc < 27.4) {
          alert('Você está levemente acima do peso - IMC = ' + imc.toFixed(2));
        } else if (imc >= 27.4 && imc < 32.4) {
          alert('Você está acima do peso - IMC = ' + imc.toFixed(2));
        } else if (imc > 32.4 ) {
          alert('Você está obeso - IMC = ' + imc.toFixed(2));
        }
      }
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

      <View style={estilo.comboBox}>
        <Picker
          selectedValue={sexo}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
        >
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
        </Picker>
      </View>
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
    borderRadius: 15
  },

  textBotao: {
    color: '#fff',
    fontSize: 25
  },

  comboBox: {
    justifyContent: 'center' ,
    alignItems: 'center',
    flexDirection: 'row',
  },
  
  boxSelection: {
    borderRadius: 15,
    backgroundColor: '#000',
    fontWeight: 'bold'
  }
});