import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Linking } from 'react-native';
import { CardIndicador } from '../components/CardIndicador';

export const HomeScreen = () => {
  const [passos, setPassos] = useState(0);
  const [sono, setSono] = useState(0);
  const [agua, setAgua] = useState(0);
  const [batimentos, setBatimentos] = useState(0);

  useEffect(() => {
    // Simulação de carregamento com dados fictícios
    setTimeout(() => {
      setPassos(7280);
      setSono(7.5);
      setAgua(2.3);
      setBatimentos(72);
    }, 1000);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Minha Saúde Hoje</Text>

      <CardIndicador
        titulo="Passos"
        valor={passos.toString()}
        unidade="passos"
        imagem={require('../assets/passos.png')}
      />

      <CardIndicador
        titulo="Sono"
        valor={sono.toString()}
        unidade="horas"
        imagem={require('../assets/sono.png')}
      />

      <CardIndicador
        titulo="Hidratação"
        valor={agua.toString()}
        unidade="litros"
        imagem={require('../assets/agua.png')}
      />

      <CardIndicador
        titulo="Frequência Cardíaca"
        valor={batimentos.toString()}
        unidade="bpm"
        imagem={require('../assets/coracao.png')}
      />

      <View style={styles.botao}>
        <Button
          title="Ver mais informações"
          onPress={() => Linking.openURL('https://www.minhavida.com.br/')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  botao: {
    marginTop: 30,
    alignSelf: 'center',
    width: '80%',
  },
});
