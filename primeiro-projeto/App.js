import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="light" backgroundColor="green" />
      
      <Text style={styles.text}>Visca barça!</Text>
      
      <Image 
        source={require('./assets/barcelona-logo.png')} 
        style={styles.image}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30, 
    fontWeight: 'bold',
    color: 'red', 
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