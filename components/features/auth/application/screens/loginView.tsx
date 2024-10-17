import { Link } from "expo-router";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.container}>
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

        <Button mode="contained-tonal" buttonColor="#309b7b" textColor="white" style={globalStyles.button}>
          <Link href={"/programDirector/home"}>
            Registrarse D.C.
          </Link>
        </Button>

        <Button mode="contained-tonal" buttonColor="#309b7b" textColor="white" style={globalStyles.button}>
          <Link href={"/academicSecretary/home"}>
            Registrarse S.A.
          </Link>
        </Button>
      </View>
    </ScrollView>
  );
}

export const globalStyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    flexBasis: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    columnGap: 2,
    rowGap: 10
  },
  userImage: {
    width: 150,
    height: 150,
    borderRadius: 70,
    marginBottom: 20,
  },
  button: {
    borderRadius: 5,
  }
});
