import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AleatorioProps {
  min: number;
  max: number;
}

const Aleatorio: React.FC<AleatorioProps> = ({ min, max }) => {
  // Função para gerar número aleatório entre min e max (inclusive)
  const gerarNumeroAleatorio = (): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const numero = gerarNumeroAleatorio();

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Número aleatório entre {min} e {max}: 
      </Text>
      <Text style={styles.numero}>
        {numero}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
  numero: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0066cc',
    marginTop: 5,
  },
});

export default Aleatorio;