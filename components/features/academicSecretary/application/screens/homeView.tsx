import { Link, router } from "expo-router";
import { Button } from "react-native-paper";
import { globalStyles } from "../../../auth/application/screens/loginView";
import { ThemedView } from "@/components/ThemedView";

export default function HomeView() {
  const goComments = () => router.push("/academicSecretary/comments");
  const goEducationalPrograms = () => router.push("/academicSecretary/educationalPrograms");
  const goSubject = () => router.push("/academicSecretary/subject");
  const goArea = () => router.push("/academicSecretary/area")
  const goBack = () => router.push("/auth/login")
  const goUsers = () => router.push("/academicSecretary/users")
  const goTeachingStaff = () => router.push("/academicSecretary/teachingStaff")
  return (
    <ThemedView style={globalStyles.container}>
      <Button
        onPress={goComments}
        buttonColor="#309b7b"
        textColor="white"
        style={globalStyles.button}
      >
        Ver Plantillas Parciales
      </Button>
      <Button
        onPress={goEducationalPrograms}
        buttonColor="#309b7b"
        style={globalStyles.button}
        textColor="white"
      >
        <Link href={"/academicSecretary/educationalPrograms"}>
          Programas Educativos
        </Link>
      </Button>

      <Button
        onPress={goSubject}
        buttonColor="#309b7b"
        style={globalStyles.button}
        textColor="white"
      >
        Materias
      </Button>
      <Button
        onPress={goArea}
        buttonColor="#309b7b"
        style={globalStyles.button}
        textColor="white"
      >
        Áreas
      </Button>

      <Button
        onPress={goUsers}
        buttonColor="#309b7b"
        style={globalStyles.button}
        textColor="white"
      >
          Ver Usuarios
      </Button>

      <Button
        onPress={goTeachingStaff}
        buttonColor="#309b7b"
        style={globalStyles.button}
        textColor="white"
      >
        Ver Plantillas Docentes
      </Button>
      <Button
        onPress={goBack}
        buttonColor="#EB1414FF"
        style={globalStyles.button}
        textColor="white"
      >
        Salir
      </Button>
    </ThemedView>
  );
}
