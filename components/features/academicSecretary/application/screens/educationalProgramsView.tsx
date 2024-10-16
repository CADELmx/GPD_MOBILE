import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Link } from "expo-router";

export default function EducationalProgramsView() {
  return (
    <View style={styles.container}>
      <Link href={"/"} style={styles.addLink}>
        Añadir programa educativo
      </Link> 

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.siglas}>SIGLA1</Text>
          <Text style={styles.descripcion}>Descripción del programa educativo 1</Text>
          <Text style={styles.area}>Área: Tecnologias de la Información</Text>
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
          <Text style={styles.siglas}>SIGLA2</Text>
          <Text style={styles.descripcion}>Descripción del programa educativo 2</Text>
          <Text style={styles.area}>Área: Lengua Inglesa</Text>
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
          <Text style={styles.siglas}>SIGLA3</Text>
          <Text style={styles.descripcion}>Descripción del programa educativo 3</Text>
          <Text style={styles.area}>Área: Paramedicos</Text>
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
  descripcion: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  area: {
    fontSize: 14,
    color: '#888',
  },
  cardIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconMargin: {
    marginLeft: 15,
  },
});
