import { Link } from "expo-router";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { globalStyles } from "../../../auth/application/screens/loginView";
import { ThemedView } from "@/components/ThemedView";

export default function HomeView() {
  return (
    <ThemedView style={globalStyles.container}>
        <Button
          buttonColor="#309b7b"
          textColor="white"
          style={globalStyles.button}
        >
          <Link href={"/programDirector/createPartial"}>
            Crear Plantilla Parcial
          </Link>
        </Button>
        <Button
          buttonColor="#309b7b"
          style={globalStyles.button}
          textColor="white"
        >
          <Link href={"/programDirector/approvedTemplate"}>
            Ver Plantillas Parciales Aprobadas
          </Link>
        </Button>
        <Button
          buttonColor="#309b7b"
          style={globalStyles.button}
          textColor="white"
        >
          <Link href={"/programDirector/pendingTemplate"}>
            Ver Plantillas Parciales Pendientes
          </Link>
        </Button>

        <Button
          buttonColor="#309b7b"
          style={globalStyles.button}
          textColor="white"
        >

          <Link href={"/programDirector/pendingTemplate"}>
            Ver Plantillas Parciales Pendientes
          </Link>

        </Button>
        <Button
          buttonColor="#309b7b"
          style={globalStyles.button}
          textColor="white"
        >
          <Link href={"/programDirector/correctedTemplate"}>
            Ver Plantillas Parciales Por Corregir
          </Link>
        </Button>

        <Button
          buttonColor="#309b7b"
          style={globalStyles.button}
          textColor="white"
        >
          <Link href={"/programDirector/teachingStaff"}>
            Plantillas Docentes
          </Link>
        </Button>
        <Button
          buttonColor="#309b7b"
          style={globalStyles.button}
          textColor="white"
        >
          <Link href={"/auth/login"}>
            Salir
          </Link>
        </Button>
    </ThemedView>
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
