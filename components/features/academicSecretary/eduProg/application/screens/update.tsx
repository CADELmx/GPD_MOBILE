import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../../eduProg/application/screens/create";
import { ThemedView } from "@/components/ThemedView";


export function EducationalProgramUpdate(){
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
            >Actualizar programa educativo</Text>

        <Text style={globalStyles.text}>Abreviación:</Text>
         <TextInput
           style={globalStyles.input}
           placeholder="Siglas"
           placeholderTextColor="#000"
         />

        <Text style={globalStyles.text} >Descripcion:</Text>
         <TextInput
           style={globalStyles.input}
           placeholder="Descrpcion"
           placeholderTextColor="#000"
           textContentType="emailAddress"
         />
         <Text style={globalStyles.text} >Área:</Text>
         <TextInput
           style={globalStyles.input}
           placeholder="Área a la que pertenece"
           placeholderTextColor="#000"
           textContentType="emailAddress"
         />
                <TouchableOpacity
                style={globalStyles.boton}
                onPress={handleLogin}>
                <Text style={globalStyles.textbo}>Guardar</Text> 
                </TouchableOpacity>
    </ThemedView>
 );
}

