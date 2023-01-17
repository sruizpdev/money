import React, {useState, useEffect} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import {formatearCantidad} from '../helpers';
import globalStyles from '../styles';

const ControlPresupuesto = ({presupuesto, gastos}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {}, []);

  return (
    <View style={styles.contenedor}>
      <View style={styles.centrarGrafica}>
        <Image style={styles.imagen} source={require('../img/grafico.jpg')} />
      </View>
      <View>
        <View style={styles.contenedorTexto}>
          <Text style={styles.valor}>
            <Text style={styles.label}>Presupuesto: </Text>
            {formatearCantidad(presupuesto)}
          </Text>
          <Text style={styles.valor}>
            <Text style={styles.label}>Disponible: </Text>
            {formatearCantidad(disponible)}
          </Text>
          <Text style={styles.valor}>
            <Text style={styles.label}>Gastado: </Text>
            {formatearCantidad(gastado)}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contenedor: {...globalStyles.contenedor},
  contenedorTexto: {marginTop: 50},
  valor: {fontSize: 24, textAlign: 'center', marginBottom: 10},
  label: {color: '#3b82f6', fontWeight: '700'},
  centrarGrafica: {alignItems: 'center'},
  imagen: {width: 200, height: 200},
});

export default ControlPresupuesto;
