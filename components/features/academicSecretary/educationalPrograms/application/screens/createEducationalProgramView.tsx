import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";



export function EducationalProgramCreate(){
    const router = useRouter();

    const handleLogin = () => {
        router.push('/academicSecretary/eduProg/home')
    }

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
            >Nuevo programa educativo</Text>

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

export const globalStyles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
    },
    container: {
      flex: 1,
     // flexBasis: 'auto',
     // flexDirection: 'column',
     // justifyContent: 'flex-start',
     // columnGap: 2,
     // rowGap: 10,
      padding:20,
     // alignSelf:"flex-start"
    },
    button: {
      borderRadius: 5,
    },
    tile:{
      fontSize: 25,
      fontWeight: "bold",
      color: "#fff", 
      padding: 10,
      textAlign:"center"
    },
    text:{
       fontSize: 18,
        color: "#fff", 
        marginBottom: 10,
        textAlign: "left",
        width: "80%",
        fontFamily: 'Arial', 
    },
    input: {
        borderColor: '#fff', 
        borderWidth: 2.5,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 20,
        backgroundColor: "#d7dbdd", 
        fontSize: 16,
        shadowOffset:{
          width: 0,
          height: 2,
        }
      },
    boton:{
      width: "auto",
      height: 40,
      borderRadius: 10,
      backgroundColor: "#309b7b", 
      shadowColor: '#00ff00',
      shadowOpacity: 0.5,
      shadowRadius: 5,
      justifyContent: "center",
      marginLeft:50,
      marginRight:50,
      marginBottom:20
    },
    textbo:{
      color: "#fff",
      fontSize: 18,
      textAlign:"center",
      fontWeight: "bold",
      
  }, 
  exitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#309b7b',
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
     exitButtonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  });