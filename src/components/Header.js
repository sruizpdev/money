import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.texto}>Planificador de Gastos</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {backgroundColor: '#3b82f6',},
  texto: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeigh: 'bold',
    paddingVertical:30
  },
});
export default Header;
