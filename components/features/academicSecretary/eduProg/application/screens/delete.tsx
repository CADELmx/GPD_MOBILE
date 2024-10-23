import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../../eduProg/application/screens/create";
import { ThemedView } from "@/components/ThemedView";


export function EducationalProgramDelete(){
    const router = useRouter();

    const handleLogin = () => {
        router.push('/academicSecretary/eduProg/home')
    };
    const handleGoHome = () => {
      router.push('/academicSecretary/eduProg/home');
    };
    return(
      <ThemedView style={globalStyles.container}>

            <TouchableOpacity style={globalStyles.exitButton} onPress={handleGoHome}>
            <FontAwesome name="home" size={24} color="white" />
            </TouchableOpacity>
            <Text
            style={globalStyles.tile}
            > ¿Estas seguro de eliminar?</Text>

        <Text style={globalStyles.text}>Selecciona un opción:</Text>

                <TouchableOpacity
                style={globalStyles.boton}
                onPress={handleLogin}>
                <Text style={globalStyles.textbo}>Cancelar</Text> 
                </TouchableOpacity>

                <TouchableOpacity
                style={globalStyles.boton}
                onPress={handleLogin}>
                <Text style={globalStyles.textbo}>Eliminar</Text> 
                </TouchableOpacity>

        </ThemedView>
    );
}

