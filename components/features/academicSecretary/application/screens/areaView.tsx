import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Link } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function AreaView() {
  return (
    <ThemedView style={styles.container}>
      <Link href={"/"} style={styles.addLink}>
        Añadir Area
      </Link>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <ThemedText style={styles.siglas}>TECNOLOGÍAS DE LA INFORMACIÓN</ThemedText>
        </View>
        <View style={styles.cardIcons}>
          <TouchableOpacity>
            <FontAwesome name="edit" size={24} color="green" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="trash" size={24} color="red" style={styles.iconMargin} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <ThemedText style={styles.siglas}>LENGUA INGLESA</ThemedText>
        </View>
        <View style={styles.cardIcons}>
          <TouchableOpacity>
            <FontAwesome name="edit" size={24} color="green" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="trash" size={24} color="red" style={styles.iconMargin} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <ThemedText style={styles.siglas}>AGROBIOTECNOLOGÍA</ThemedText>
        </View>
        <View style={styles.cardIcons}>
          <TouchableOpacity>
            <FontAwesome name="edit" size={24} color="green" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="trash" size={24} color="red" style={styles.iconMargin} />
          </TouchableOpacity>
        </View>
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
    shadowColor: '#000',
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
  },
  cardIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconMargin: {
    marginLeft: 15,
  },
});