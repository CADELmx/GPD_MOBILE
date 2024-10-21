import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from 'expo-router';

export default function CreateAreaView() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Registrar Área</ThemedText>
      
      <TextInput
        style={styles.input}
        placeholder="Nombre del Área"
      />
      
      <View style={styles.buttonContainer}>
      <Link href="/academicSecretary/areas/home" asChild>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.cancelButtonText}>Registrar</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/academicSecretary/areas/home" asChild>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </Link>
      </View>
      
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    shadowColor: '#309b7b',
    backgroundColor: '#d7dbdd',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
  },
  registerButton: {
    backgroundColor: '#309b7b',
    padding: 10,
    borderRadius: 8,
  },
  cancelButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
