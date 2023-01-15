import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';

const App = () => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Header  />
        <NuevoPresupuesto />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {backgroundColor: '#3b82f6',},
  contenedor: {backgroundColor: '#f5f5f5', flex: 1},
});
export default App;
