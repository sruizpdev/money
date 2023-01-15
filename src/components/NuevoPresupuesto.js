import {View, Text, Pressable, TextInput, StyleSheet} from 'react-native';

const NuevoPresupuesto = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Definir presupuesto</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="Agrega tu presupuesto"
        style={styles.input}
      />
      <Pressable style={styles.boton}>
        <Text style={styles.botonTexto}>Agrega Presupuesto</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 40,
    transform: [{translateY: 50}],
  },
  label: {
    textAlign: 'center',
    fontSize: 24,
    color: '#3b82f6',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 20,
  },
  boton: {
    marginTop: 20,
    backgroundColor: '#1048a4',
    padding: 10,
    borderRadius: 10,
  },
  botonTexto: {
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
export default NuevoPresupuesto;
