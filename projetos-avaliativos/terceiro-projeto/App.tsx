import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [valorMinimo, setValorMinimo] = useState('');
  const [valorMaximo, setValorMaximo] = useState('');
  const [numeroAleatorio, setNumeroAleatorio] = useState(null);

  const gerarNumeroAleatorio = () => {
    const minimo = parseInt(valorMinimo);
    const maximo = parseInt(valorMaximo);

    const resultado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    setNumeroAleatorio(resultado);
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Gerador de Número Aleatório</Text>

      <TextInput
        style={estilos.entrada}
        keyboardType="numeric"
        placeholder="Valor inicial"
        value={valorMinimo}
        onChangeText={setValorMinimo}
      />

      <TextInput
        style={estilos.entrada}
        keyboardType="numeric"
        placeholder="Valor final"
        value={valorMaximo}
        onChangeText={setValorMaximo}
      />

      <Button title="Gerar Número" onPress={gerarNumeroAleatorio} />

      {numeroAleatorio !== null && (
        <Text style={estilos.resultado}>Número sorteado: {numeroAleatorio}</Text>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    marginBottom: 20,
  },
  entrada: {
    width: '80%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  resultado: {
    fontSize: 20,
    marginTop: 20,
    color: 'green',
  },
});
