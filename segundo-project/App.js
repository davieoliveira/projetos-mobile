import React from 'react';
import { View, StyleSheet } from 'react-native';
import Aleatorio from './Aleatorio';

export default function App() {
  return (
    <View style={styles.container}>
      <Aleatorio min={1} max={10} />
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
});