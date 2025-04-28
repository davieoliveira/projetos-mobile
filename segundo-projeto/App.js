import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default function App() {
  const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
  
  const diceImages = {
    1: require('./assets/dice-1.png'),
    2: require('./assets/dice-2.png'),
    3: require('./assets/dice-3.png'),
    4: require('./assets/dice-4.png'),
    5: require('./assets/dice-5.png'),
    6: require('./assets/dice-6.png')
  };

  return (
    <View style={styles.container}>

      <Image 
        source={diceImages[numeroAleatorio]}
        style={styles.image}
      />

      <Text style={styles.text}> Seu número aleatório é {numeroAleatorio} </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30, 
    fontWeight: 'bold',
    color: 'black', 
    backgroundColor: 'white', 
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});