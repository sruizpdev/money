import React from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';

const App = () => {
  const handleNuevoPresupuesto = presupuesto => {
    if (Number(presupuesto) > 0) {
      console.log('Presupuesto valido');
    } else {
      Alert.alert('Error', 'El presupuesto no puede ser 0 o menor', 'OK')
    }
  };
  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Header />
        <NuevoPresupuesto handleNuevoPresupuesto={handleNuevoPresupuesto} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {backgroundColor: '#3b82f6'},
  contenedor: {backgroundColor: '#f5f5f5', flex: 1},
});
export default App;
