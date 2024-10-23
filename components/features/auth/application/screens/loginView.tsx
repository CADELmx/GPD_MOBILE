import { Link, router } from "expo-router";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { ThemedView } from "@/components/ThemedView";

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <ThemedView style={globalStyles.container}>
        <Image
          style={globalStyles.userImage}
          source={require('../../../../../assets/images/foto.png')} // Imagen de ejemplo
        />

        <TextInput
          dense
          mode="outlined"
          label='Correo electrónico'
          placeholder="Ingresa tu correo"
          activeOutlineColor="#309b7b"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          dense
          mode="outlined"
          activeOutlineColor="#309b7b"
          label='Contraseña'
          placeholder="Ingresa tu contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <Button onPress={() => {
          router.push('/programDirector/home');
        }} mode="contained-tonal" buttonColor="#309b7b" textColor="white" style={globalStyles.button}>
          Registrarse D.C.
        </Button>

        <Button onPress={() => {
          router.push('/academicSecretary/home');
        }} mode="contained-tonal" buttonColor="#309b7b" textColor="white" style={globalStyles.button}>
          Registrarse S.A.
        </Button>
      </ThemedView>
    </ScrollView>
  );
}

export const globalStyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexBasis: 'auto',
    flexDirection: 'column',
    width: '100%',
    padding: '10%',
    alignContent: 'center',
    justifyContent: 'center',
    columnGap: 2,
    rowGap: 10
  },
  userImage: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 70,
    marginBottom: 20,
  },
  button: {
    borderRadius: 5,
  }
});
