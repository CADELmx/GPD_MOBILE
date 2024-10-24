import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Picker } from "@react-native-picker/picker";
import { Link } from "expo-router";
import { Button } from "react-native-paper"
import { globalStyles } from "../../../../auth/application/screens/loginView";

export default function HomeSubjectView() {
  const [selectedCareer, setSelectedCareer] = useState("");
  const [selectedQuarter, setSelectedQuarter] = useState("");

  const careers = [
    { label: "Ingeniería en Tecnologías de la Información", value: "iti" },
    { label: "Licenciatura en Lengua Inglesa", value: "li" },
    { label: "Ingeniería en Agrobiotecnología", value: "iab" }
  ];

  const quarters = ["Primer Cuatrimestre", "Segundo Cuatrimestre", "Tercer Cuatrimestre"];

  const subjects = [
    { name: "Matemáticas", weeklyHours: 5, totalHours: 80 },
    { name: "Programación", weeklyHours: 4, totalHours: 64 },
    { name: "Inglés", weeklyHours: 3, totalHours: 48 },
  ];

  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <ThemedText style={styles.label}>Seleccione una carrera</ThemedText>
        <Picker
          selectedValue={selectedCareer}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedCareer(itemValue)}
        >
          {careers.map((career) => (
            <Picker.Item key={career.value} label={career.label} value={career.value} />
          ))}
        </Picker>

        {selectedCareer ? (
          <>
            <ThemedText style={styles.label}>Seleccione un cuatrimestre</ThemedText>
            <Picker
              selectedValue={selectedQuarter}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedQuarter(itemValue)}
            >
              {quarters.map((quarter, index) => (
                <Picker.Item key={index} label={quarter} value={quarter} />
              ))}
            </Picker>
          </>
        ) : null}

        {selectedCareer && selectedQuarter ? (
          <View>
            <ThemedText style={styles.sectionTitle}>Materias del {selectedQuarter}</ThemedText>
            {subjects.map((subject, index) => (
              <View key={index} style={styles.card}>
                <View style={styles.cardContent}>
                  <ThemedText style={styles.subjectName}>{subject.name}</ThemedText>
                  <Text style={styles.details}>Horas semanales: {subject.weeklyHours}</Text>
                  <Text style={styles.details}>Horas totales: {subject.totalHours}</Text>
                </View>
                <View style={styles.cardIcons}>
                <Link href={"/academicSecretary/subjects/update"} asChild>
                  <TouchableOpacity>
                    <FontAwesome name="edit" size={24} color="green" />
                  </TouchableOpacity>
                </Link>
                
                <Link href={"/academicSecretary/subjects/delete"} asChild>
                  <TouchableOpacity>
                    <FontAwesome name="trash" size={24} color="red" style={styles.iconMargin} />
                  </TouchableOpacity>
                </Link>
                </View>
              </View>
            ))}
          </View>
        ) : null}

        <Button 
          buttonColor= "#309b7b"
          textColor="white"
          style={globalStyles.button}>
          <Link href={"/academicSecretary/subjects/create"}> Añadir Materia</Link>
        </Button>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  picker: {
    height: 50,
    marginBottom: 20,
    shadowColor: '#309b7b',
    backgroundColor: '#d7dbdd',
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
  },
  card: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#d7dbdd",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flex: 1,
  },
  subjectName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "black",
  },
  details: {
    fontSize: 14,
    color: "gray",
  },
  cardIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconMargin: {
    marginLeft: 15,
  },
  addButton: {
    marginTop: 20,
  },
});
