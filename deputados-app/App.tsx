import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [nome, setNome] = useState('');
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    if (nome.length > 2) {
      fetchDeputado();
    } else {
      setResultado(null);
    }
  }, [nome]);

  const fetchDeputado = async () => {
    try {
      const API = `https://dadosabertos.camara.leg.br/api/v2/deputados?nome=${encodeURIComponent(nome)}`;
      const res = await fetch(API);
      const json = await res.json();
      setResultado(json.dados); 
    } catch (error) {
      console.error('Erro ao buscar deputado:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Buscar Deputado</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do deputado"
        value={nome}
        onChangeText={setNome}
      />

      <ScrollView style={styles.resultadoContainer}>
        {resultado &&
          resultado.map((dep) => (
            <View key={dep.id} style={styles.item}>
              <Text style={styles.nome}>{dep.nome}</Text>
              <Text>Partido: {dep.siglaPartido} - UF: {dep.siglaUf}</Text>
              <Text>ID: {dep.id}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 20,
  },
  resultadoContainer: {
    marginTop: 10,
  },
  item: {
    padding: 10,
    marginBottom: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 6,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
