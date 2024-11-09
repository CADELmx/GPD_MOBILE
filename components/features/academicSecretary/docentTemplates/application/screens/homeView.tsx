import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const areas = [
  { name: "Matemáticas", status: "Pendiente", responsible: "María Pérez" },
  { name: "Ciencias", status: "Aprobado", responsible: "Carlos García" },
];

export default function HomeTeachingTemplatesView() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Plantillas Docentes</ThemedText>

      {areas.map((area, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content>
            <Text style={styles.areaTitle}>Nombre Área: {area.name}</Text>
            <Text style={[styles.status, area.status === "Aprobado" ? styles.approved : styles.pending]}>
              Estado: {area.status}
            </Text>
            <Text style={styles.responsible}>Responsable: {area.responsible}</Text>
          </Card.Content>
        </Card>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    marginBottom: 12,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#d7dbdd',
    shadowColor: '#309b7b',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 3,
  },
  areaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  status: {
    fontSize: 16,
    marginBottom: 4,
  },
  approved: {
    color: 'green',
  },
  pending: {
    color: 'red',
  },
  responsible: {
    fontSize: 14,
    color: 'black',
  },
});
