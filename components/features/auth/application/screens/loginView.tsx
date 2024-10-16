import { Link } from "expo-router";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, TextInput} from "react-native-paper";

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
          dense
          mode="outlined"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <Button mode="contained-tonal" buttonColor="#309b7b" style={styles.button}>
          <Link href={"/programDirector/home"}>
            Registrarse D.C.
          </Link>
        </Button>

        <Button mode="contained-tonal" buttonColor="#309b7b" style={styles.button}>
          <Link href={"/academicSecretary/home"}>
            Registrarse S.A.
          </Link>
        </Button>
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
    borderRadius: 5,
    margin: 2
  }
});
