import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, View, ScrollView } from "react-native";
import { Divider } from "react-native-paper";

export default function UsersHomeView() {
  // Ejemplo de datos de usuarios, reemplaza con datos reales.
  const users = [
    { email: "usuario1@example.com", nt: "NT1234" },
    { email: "usuario2@example.com", nt: "NT5678" },
  ];

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Usuarios Registrados</ThemedText>
      <ScrollView>
        {users.map((user, index) => (
          <View key={index} style={styles.userContainer}>
            <ThemedText style={styles.email}>Correo: {user.email}</ThemedText>
            <ThemedText style={styles.nt}>NT: {user.nt}</ThemedText>
            {index < users.length - 1 && <Divider style={styles.divider} />}
          </View>
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  userContainer: {
    paddingVertical: 12,
  },
  email: {
    fontSize: 16,
    fontWeight: "bold",
  },
  nt: {
    fontSize: 14,
    color: "white",
    marginTop: 4,
  },
  divider: {
    marginVertical: 8,
  },
});
