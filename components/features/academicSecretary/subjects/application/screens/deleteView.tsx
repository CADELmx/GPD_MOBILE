import React from "react";
import { Modal, View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { Button } from "react-native-paper";
import { globalStyles } from "../../../../auth/application/screens/loginView";

export default function DeleteSubjectView() {
  return (
    <ThemedView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <ThemedText style={styles.modalText}>¿Está seguro que desea eliminar la materia?</ThemedText>
            <ThemedText style={styles.modalText2}>Esta acción no se puede revertir</ThemedText>
            <View style={styles.buttonContainer}>
            <Button
        buttonColor="red"
        textColor="white"
        style={globalStyles.button}
      >
        <Link href={"/academicSecretary/subjects/home"}>
          Eliminar
        </Link>
      </Button>

      <Button
        buttonColor="#99a3a4"
        textColor="white"
        style={globalStyles.button}
      >
        <Link href={"/academicSecretary/subjects/home"}>
          Cancelar
        </Link>
      </Button>
            </View>
          </View>
        </View>
      </Modal>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: '#d7dbdd',
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "black"
  },
  modalText2: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "black"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
