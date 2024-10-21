import { Link } from "expo-router";
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
        <Link href={"/academicSecretary/comments"}>
          Ver Plantillas Parciales
        </Link>
      </Button>
      <Button
        buttonColor="#309b7b"
        style={globalStyles.button}
        textColor="white"
      >
        <Link href={"/academicSecretary/educationalPrograms"}>
          Programas Educativos
        </Link>
      </Button>

      <Button
        buttonColor="#309b7b"
        style={globalStyles.button}
        textColor="white"
      >
        <Link href={"/academicSecretary/subjects/home"}>
          Materias
        </Link>
      </Button>
      <Button
        buttonColor="#309b7b"
        style={globalStyles.button}
        textColor="white"
      >
        <Link href={"/academicSecretary/areas/home"}>
          Áreas
        </Link>
      </Button>

      <Button
        buttonColor="#309b7b"
        style={globalStyles.button}
        textColor="white"
      >
        <Link href={"/academicSecretary/users"}>
          Ver Usuarios
        </Link>
      </Button>

      <Button
        buttonColor="#309b7b"
        style={globalStyles.button}
        textColor="white"
      >
        <Link href={"/academicSecretary/teachingStaff"}>
          Ver Plantillas Docentes
        </Link>
      </Button>
      <Button
        buttonColor="#EB1414FF"
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
