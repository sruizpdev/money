import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';

const App = () => {
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [presupuesto, setPresupuesto] = useState(0);

  const [gastos, setGastos] = useState([
    {id: 1, total: 30},
    {id: 2, total: 40},
    {id: 3, total: 50},
  ]);
  const handleNuevoPresupuesto = presupuesto => {
    if (Number(presupuesto) > 0) {
      setIsValidPresupuesto(true);
    } else {
      Alert.alert('Error', 'El presupuesto no puede ser 0 o menor', 'OK');
    }
  };
  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Header />
        {isValidPresupuesto ? (
          <ControlPresupuesto presupuesto={presupuesto} gastos={gastos} />
        ) : (
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            handleNuevoPresupuesto={handleNuevoPresupuesto}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {backgroundColor: '#3b82f6'},
  contenedor: {backgroundColor: '#f5f5f5', flex: 1},
});
export default App;
