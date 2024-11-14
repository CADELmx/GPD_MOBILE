import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Link, useRouter } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function EducationalProgramsView() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      {/* Botón para salir */}
      <TouchableOpacity
        style={styles.exitButton}
        onPress={() => { router.push("/academicSecretary/home") }}
      >
        <FontAwesome name="home" size={24} color="white" />
      </TouchableOpacity>

      <Link href={"/programDirector/educationalPrograms/create"} style={styles.addLink}>
        Añadir programa educativo
      </Link>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <ThemedText style={styles.siglas}>SIGLA1</ThemedText>
          <ThemedText style={styles.descripcion}>Descripción del programa educativo 1</ThemedText>
          <ThemedText style={styles.area}>Área: Tecnologías de la Información</ThemedText>
        </View>
        <View style={styles.cardIcons}>
          <TouchableOpacity>
            <FontAwesome
              onPress={() => { router.push("/academicSecretary/educationalPrograms/update") }}
              name="edit"
              size={24}
              color="#309b7b"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome
              onPress={() => { router.push("/programDirector/educationalPrograms/delete") }}
              name="trash"
              size={24}
              color="red"
              style={styles.iconMargin}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Resto del contenido */}
      {/* Puedes seguir agregando más tarjetas como las anteriores */}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  addLink: {
    marginBottom: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#32CD32',
    textAlign: 'right',
  },
  card: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flex: 1,
  },
  siglas: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descripcion: {
    fontSize: 14,
    marginBottom: 5,
  },
  area: {
    fontSize: 14,
  },
  cardIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconMargin: {
    marginLeft: 15,
  },
  exitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#309b7b',
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  exitButtonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
