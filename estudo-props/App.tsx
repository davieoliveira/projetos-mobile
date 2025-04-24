import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cat from './Cat';

export default function App() {
  return (
    <View style={styles.container}>
      <Cat nome="Ernani" idade={24}/>
      <Cat nome="Augusto" idade={19}/>
      <Cat nome="Davi" idade={24}/>
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
});
