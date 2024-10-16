import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Link } from "expo-router";

export default function AreaView() {
  return (
    <View style={styles.container}>
      <Link href={"/"} style={styles.addLink}>
        Añadir Area
      </Link> 
      
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.siglas}>TECNOLOGÍAS DE LA INFORMACIÓN</Text>
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
          <Text style={styles.siglas}>LENGUA INGLESA</Text>
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
          <Text style={styles.siglas}>AGROBIOTECNOLOGÍA</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  addLink: {
    marginBottom: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#32CD32',
    textAlign: 'right'
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
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
  cardIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconMargin: {
    marginLeft: 15,
  },
});