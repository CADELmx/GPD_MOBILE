import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Picker } from "@react-native-picker/picker";
import { Button } from "react-native-paper";
import { globalStyles } from "../../../../auth/application/screens/loginView";

export default function UpdateSubjectView() {
  const [semanales, setSemanales] = useState('');
  const [totales, setTotales] = useState('');
  const [cuatrimestre, setCuatrimestre] = useState('');
  const [nombre, setNombre] = useState('');
  const [programa, setPrograma] = useState('');

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Actualizar Materia</ThemedText>

      <TextInput
        style={styles.input}
        placeholder="Nombre de la Materia"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Horas Semanales"
        keyboardType="numeric"
        value={semanales}
        onChangeText={setSemanales}
      />

      <TextInput
        style={styles.input}
        placeholder="Horas Totales"
        keyboardType="numeric"
        value={totales}
        onChangeText={setTotales}
      />

      <TextInput
        style={styles.input}
        placeholder="Paramedico"
        value={programa}
        onChangeText={setPrograma}
      />

      
      <TextInput
        style={styles.input}
        placeholder="Cuatrimestre 1"
        value={cuatrimestre}
        onChangeText={setCuatrimestre}
      />


      <View style={styles.buttonContainer}>
      <Button
        buttonColor="#309b7b"
        textColor="white"
        style={globalStyles.button}
      >
        <Link href={"/academicSecretary/subjects/home"}>
          Registrar
        </Link>
      </Button>

      <Button
        buttonColor="red"
        textColor="white"
        style={globalStyles.button}
      >
        <Link href={"/academicSecretary/subjects/home"}>
          Cancelar
        </Link>
      </Button>
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
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
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
