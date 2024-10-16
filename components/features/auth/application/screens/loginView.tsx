import { Link } from "expo-router";
import { StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image 
          style={styles.userImage} 
          source={require('../../../../../assets/images/foto.png')} // Imagen de ejemplo
        />

        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu correo"
          placeholderTextColor="#32CD32"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu contraseña"
          placeholderTextColor="#32CD32"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button}>
          <Link href={"/programDirector/home"} style={styles.textbutton}>
            Registrarse D.C.
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Link href={"/academicSecretary/home"} style={styles.textbutton}>
            Registrarse S.A.
          </Link>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 80,
  },
  userImage: {
    width: 150,
    height: 150,
    borderRadius: 70,
    marginBottom: 20,
  },
  label: {
    color: '#32CD32', 
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#32CD32',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#F0FFF0',
  },
  button: {
    width: '50%',
    backgroundColor: '#32CD32',
    borderRadius: 5,
    paddingVertical: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  textbutton: {
    color: '#FFFFFF',
    fontSize: 16,
  }
});
