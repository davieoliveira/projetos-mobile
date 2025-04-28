import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const diceImages = [
    require('./assets/dice-1.png'),
    require('./assets/dice-2.png'),
    require('./assets/dice-3.png'),
    require('./assets/dice-4.png'),
    require('./assets/dice-5.png'),
    require('./assets/dice-6.png'),
  ];

  const [currentDice, setCurrentDice] = useState(1);
  const [currentImage, setCurrentImage] = useState(diceImages[0]);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    setCurrentDice(randomNumber);
    setCurrentImage(diceImages[randomNumber - 1]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogue o Dado</Text>
      
      <Image source={currentImage} style={styles.diceImage} />
      
      <Text style={styles.result}>Valor: {currentDice}</Text>
      
      <TouchableOpacity style={styles.button} onPress={rollDice}>
        <Text style={styles.buttonText}>Rolar Dado</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  diceImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  result: {
    fontSize: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});