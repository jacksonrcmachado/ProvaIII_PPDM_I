import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface Props {
  titulo: string;
  valor: string;
  unidade: string;
  imagem: any;
}

export const CardIndicador = ({ titulo, valor, unidade, imagem }: Props) => (
  <View style={styles.card}>
    <Image source={imagem} style={styles.imagem} />
    <Text style={styles.titulo}>{titulo}</Text>
    <Text style={styles.valor}>{valor} {unidade}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 20,
    borderRadius: 15,
    elevation: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  imagem: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  valor: {
    fontSize: 18,
    color: '#00aaff',
  },
});
