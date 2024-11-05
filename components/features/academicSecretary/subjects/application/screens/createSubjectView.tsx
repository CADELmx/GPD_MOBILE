import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Picker } from "@react-native-picker/picker";
import { Button } from "react-native-paper";
import { globalStyles } from "../../../../auth/application/screens/loginView";

export default function CreateSubjectView() {
  const [semanales, setSemanales] = useState('');
  const [totales, setTotales] = useState('');
  const [cuatrimestre, setCuatrimestre] = useState('');
  const [nombre, setNombre] = useState('');
  const [programa, setPrograma] = useState('');

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Registrar Nueva Materia</ThemedText>

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

      <Picker
        selectedValue={cuatrimestre}
        style={styles.input}
        onValueChange={(itemValue) => setCuatrimestre(itemValue)}
      >
        <Picker.Item label="Selecciona el Cuatrimestre" value="" />
        <Picker.Item label="Cuatrimestre 1" value="1" />
        <Picker.Item label="Cuatrimestre 2" value="2" />
        <Picker.Item label="Cuatrimestre 3" value="3" />
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Nombre de la Materia"
        value={nombre}
        onChangeText={setNombre}
      />

      <Picker
        selectedValue={programa}
        style={styles.input}
        onValueChange={(itemValue) => setCuatrimestre(itemValue)}
      >
        <Picker.Item label="Selecciona el Programa Educativo" value="" />
        <Picker.Item label="Paramerico" value="1" />
        <Picker.Item label="Procesos Alimentarios" value="2" />
        <Picker.Item label="Lengua Inglesa" value="3" />
      </Picker>

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
