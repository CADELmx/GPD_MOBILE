import { Link } from "expo-router";
import { StyleSheet, View, TouchableOpacity } from "react-native";

export default function HomeView() {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.button}>
        <Link href={"/academicSecretary/comments"} style={styles.buttonText}>
          Ver Plantillas Parciales
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Link href={"/academicSecretary/educationalPrograms"} style={styles.buttonText}>
          Programas Educativos
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Link href={"/academicSecretary/subject"} style={styles.buttonText}>
          Materias
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Link href={"/academicSecretary/area"} style={styles.buttonText}>
          Áreas
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Link href={"/academicSecretary/users"} style={styles.buttonText}>
          Ver Usuarios
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Link href={"/academicSecretary/teachingStaff"} style={styles.buttonText}>
          Ver Plantillas Docentes
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
    padding: 20,
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
  },
});
