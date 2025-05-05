import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [numeros, setNumeros] = useState(Array(6).fill('0'));

  const sortearNumeros = () => {
    const novosNumeros = [];
    
    while (novosNumeros.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!novosNumeros.includes(numero)) {
        novosNumeros.push(numero);
      }
    }
    
    novosNumeros.sort((a, b) => a - b);
    setNumeros(novosNumeros);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Sortear 6 Números</Text>
      
      <View style={styles.numerosContainer}>
        {numeros.map((numero, index) => (
          <View key={index} style={styles.numeroBox}>
            <Text style={styles.numeroText}>{numero}</Text>
          </View>
        ))}
      </View>
      
      <TouchableOpacity 
        style={styles.botao} 
        onPress={sortearNumeros}
      >
        <Text style={styles.botaoTexto}>Sortear Números</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  numerosContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
    flexWrap: 'wrap',
  },
  numeroBox: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    elevation: 3,
  },
  numeroText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  botao: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 3,
  },
  botaoTexto: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});