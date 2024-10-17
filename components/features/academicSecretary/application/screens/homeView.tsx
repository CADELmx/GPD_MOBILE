import { Link } from "expo-router";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { globalStyles } from "../../../auth/application/screens/loginView";

export default function HomeView() {
  return (
    <View style={globalStyles.container}>

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
        <Link href={"/academicSecretary/subject"}>
          Materias
        </Link>
      </Button>
      <Button
        buttonColor="#309b7b"
        style={globalStyles.button}
        textColor="white"
      >
        <Link href={"/academicSecretary/area"}>
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
    </View>
  );
}
