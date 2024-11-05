import React, { useState } from "react";
import { Modal, View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

export default function DeleteAreaView() {
  return (
    <ThemedView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <ThemedText style={styles.modalText}>¿Está seguro de eliminar el área?</ThemedText>
            <View style={styles.buttonContainer}>
              <Link href={"/academicSecretary/areas/home"}>
                <TouchableOpacity style={styles.cancelButton}>
                  <Text style={styles.cancelButtonText}>Cancelar</Text>
                </TouchableOpacity>
              </Link>

              <Link href={"/academicSecretary/areas/home"}>
                <TouchableOpacity style={styles.registerButton}>
                  <Text style={styles.cancelButtonText}>Eliminar</Text>
                </TouchableOpacity>
              </Link>
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
      height: 2,
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  cancelButton: {
    backgroundColor: '#309b7b',
    padding: 10,
    borderRadius: 8,
  },
  registerButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
  },
  cancelButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
