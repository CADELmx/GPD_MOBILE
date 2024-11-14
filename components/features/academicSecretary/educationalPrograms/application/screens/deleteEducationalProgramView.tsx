import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { globalStyles } from "./createEducationalProgramView";
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

        <View style={Styles.conten}>
                <TouchableOpacity
                style={Styles.botonC}
                onPress={handleLogin}>
                <Text style={globalStyles.textbo}>Cancelar</Text> 
                </TouchableOpacity>

                <TouchableOpacity
                style={Styles.botonE}
                onPress={handleLogin}>
                <Text style={globalStyles.textbo}>Eliminar</Text> 
                </TouchableOpacity>
         </View>
        </ThemedView>
    );
}

export const Styles = StyleSheet.create({
  conten:{
    flex:1,
    flexDirection:"row"
  },
  botonC:{
    width: "35%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#309b7b",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    //justifyContent: "center",
    marginLeft:20,
    marginRight:30,
    marginBottom:20,
  },
  botonE:{
    width: "35%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "red", 
    shadowOpacity: 0.5,
    shadowRadius: 5,
   // justifyContent: "center",
    marginLeft:20,
    //marginRight:20,
    marginBottom:20
  },
});
