import { Link, router } from "expo-router";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { globalStyles } from "../../../auth/application/screens/loginView";
import { ThemedView } from "@/components/ThemedView";

export default function HomeView() {
  const goCreatePartial = () => router.push('/programDirector/createPartial')
  const goApprovedTemplate = () => router.push('/programDirector/approvedTemplate')
  const goPendingTemplate = () => router.push('/programDirector/pendingTemplate')
  const goCorrectedTemplate = () => router.push('/programDirector/correctedTemplate')
  const goTeachingStaff = () => router.push('/programDirector/teachingStaff')
  const goBack = () => router.push('/auth/login')
  return (
    <ThemedView style={globalStyles.container}>
      <Button
        onPress={goCreatePartial}
        buttonColor="#309b7b"
        textColor="white"
        style={globalStyles.button}
      >
        Crear Plantilla Parcial
      </Button>
      <Button
        onPress={goApprovedTemplate}
        buttonColor="#309b7b"
        style={globalStyles.button}
        textColor="white"
      >
          Ver Plantillas Parciales Aprobadas
      </Button>
      <Button
        onPress={goPendingTemplate}
        buttonColor="#309b7b"
        style={globalStyles.button}
        textColor="white"
      >
          Ver Plantillas Parciales Pendientes
      </Button>
      <Button
        onPress={goCorrectedTemplate}
        buttonColor="#309b7b"
        style={globalStyles.button}
        textColor="white"
      >
        <Link href={"/programDirector/correctedTemplate"}>
          Ver Plantillas Parciales Por Corregir
        </Link>
      </Button>

      <Button
        onPress={goTeachingStaff}
        buttonColor="#309b7b"
        style={globalStyles.button}
        textColor="white"
      >
          Plantillas Docentes
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
