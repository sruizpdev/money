import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import globalStyles from '../styles';

const FormularioGasto = () => {
  return (
    <SafeAreaView style={styles.contenedor}>
      <View>
        <Pressable>
          <Text>Cancelar</Text>
        </Pressable>
      </View>
      <View style={styles.formulario}>
        <Text style={styles.titulo}>Nuevo Gasto</Text>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre del gasto</Text>
          <TextInput
            style={styles.input}
            placeholder="Introduce el nombre del gasto. Ej. Comida"
          />
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Cantidad del gasto</Text>
          <TextInput
            style={styles.input}
            placeholder="Introduce la cantidad del gasto. Ej. 300"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Categoría gasto</Text>
          <Picker>
            <Picker.Item label="--Seleccione" value="" />
            <Picker.Item label="Ahorro" value="ahorro" />
            <Picker.Item label="Comida" value="comida" />
            <Picker.Item label="Casa" value="casa" />
            <Picker.Item label="Varios" value="varios" />
            <Picker.Item label="Ocio" value="ocio" />
            <Picker.Item label="Salud" value="salud" />
            <Picker.Item label="Suscripciones" value="supcripciones" />
          </Picker>
        </View>
        <Pressable style={styles.submitBtn}>
          <Text style={styles.submitBtnTexto}>Agregar gasto</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#1e40af',
    flex: 1,
  },
  formulario: {
    ...globalStyles.contenedor,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 28,
    marginVertical: 30,
    color: '#64748b',
  },
  campo: {marginVertical: 10},
  label: {
    color: '#64748b',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  submitBtn: {backgroundColor: '#3b82f6', padding: 10, marginTop: 20},
  submitBtnTexto: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default FormularioGasto;
