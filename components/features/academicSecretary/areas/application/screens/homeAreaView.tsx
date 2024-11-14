import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Link } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function HomeAreaView() {
  return (
    <ThemedView style={styles.container}>
      <Link href={"/academicSecretary/areas/create"} style={styles.addLink}>
        Añadir Area
      </Link>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <ThemedText style={styles.siglas}>TECNOLOGÍAS DE LA INFORMACIÓN</ThemedText>
        </View>
        <View style={styles.cardIcons}>
          <Link href={"/academicSecretary/areas/update"} asChild>
            <TouchableOpacity>
              <FontAwesome name="edit" size={24} color="green" />
            </TouchableOpacity>
          </Link>
          
          <Link href={"/academicSecretary/areas/delete"}>
          <TouchableOpacity>
            <FontAwesome name="trash" size={24} color="red" style={styles.iconMargin} />
          </TouchableOpacity>
          </Link>

        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <ThemedText style={styles.siglas}>LENGUA INGLESA</ThemedText>
        </View>
        <View style={styles.cardIcons}>

          <Link href={"/academicSecretary/areas/update"} asChild>
            <TouchableOpacity>
              <FontAwesome name="edit" size={24} color="green" />
            </TouchableOpacity>
          </Link>

          <Link href={"/academicSecretary/areas/delete"}>
          <TouchableOpacity>
            <FontAwesome name="trash" size={24} color="red" style={styles.iconMargin} />
          </TouchableOpacity>
          </Link>

        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <ThemedText style={styles.siglas}>AGROBIOTECNOLOGÍA</ThemedText>
        </View>
        <View style={styles.cardIcons}>
          <Link href={"/academicSecretary/areas/update"} asChild>
            <TouchableOpacity>
              <FontAwesome name="edit" size={24} color="green" />
            </TouchableOpacity>
          </Link>

          <Link href={"/academicSecretary/areas/delete"}>
          <TouchableOpacity>
            <FontAwesome name="trash" size={24} color="red" style={styles.iconMargin} />
          </TouchableOpacity>
          </Link>
          
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <Link href="/academicSecretary/home" asChild>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Salir</Text>
          </TouchableOpacity>
        </Link>
      </View>

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
    color: '#309b7b',
    textAlign: 'right'
  },
  card: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#309b7b',
    backgroundColor: '#d7dbdd',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 1 },
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
    color: 'black'
  },
  cardIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconMargin: {
    marginLeft: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  cancelButton: {
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
