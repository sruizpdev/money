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

const FormularioGasto = () => {
  return (
    <SafeAreaView>
      <View>
        <Pressable>
          <Text>Cancelar</Text>
        </Pressable>
      </View>
      <View>
        <Text>Nuevo Gasto</Text>
        <View>
          <Text>Nombre del gasto</Text>
          <TextInput placeholder="Introduce el nombre del gasto. Ej. Comida" />
        </View>
        <View>
          <Text>Cantidad del gasto</Text>
          <TextInput
            placeholder="Introduce la cantidad del gasto. Ej. 300"
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text>Categoría gasto</Text>
          <Picker>
            <Picker.Item label="--Seleccione" value="0" />
            <Picker.Item label="--Seleccione" value="0" />
            <Picker.Item label="--Seleccione" value="0" />
          </Picker>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({});

export default FormularioGasto;
