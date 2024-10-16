import { Link } from "expo-router";
import { StyleSheet, View, TouchableOpacity } from "react-native";

export default function HomeView() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Link href={"/programDirector/createPartial"} style={styles.buttonText}>
          Crear Plantilla Parcial
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Link href={"/programDirector/approvedTemplate"} style={styles.buttonText}>
          Ver Plantillas Parciales Aprobadas
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Link href={"/programDirector/pendingTemplate"} style={styles.buttonText}>
          Ver Plantillas Parciales Pendientes
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Link href={"/programDirector/correctedTemplate"} style={styles.buttonText}>
          Ver Plantillas Parciales Por Corregir
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Link href={"/programDirector/teachingStaff"} style={styles.buttonText}>
          Plantillas Docentes
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton}>
        <Link href={"/auth/login"} style={styles.logoutButtonText}>
          Salir
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', 
  },
  button: {
    width: '100%',
    backgroundColor: '#32CD32', 
    borderRadius: 10,
    paddingVertical: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  logoutButton: {
    width: '100%',
    backgroundColor: '#FF6347',
    borderRadius: 10,
    paddingVertical: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
