import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';

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
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({});

export default FormularioGasto;
