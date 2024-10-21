import { useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export function EducationalProgramDelete(){
    const router = useRouter();

    const handleLogin = () => {
        router.push('/academicSecretary/eduProg/home')
    }
    return(
        <View style={globalStyles.container}>
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

               
        </View>
    );
}

export const globalStyles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      flexBasis: 'auto',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      columnGap: 2,
      rowGap: 10,
      padding:50
    },
    button: {
      borderRadius: 5,
    },
    tile:{
      fontSize: 28,
      fontWeight: "bold",
      color: "#000", 
      padding: 10,
      textAlign:"center"
    },
    text:{
       fontSize: 18,
        color: "#000", 
        marginBottom: 10,
        textAlign: "left",
        width: "80%",
        fontFamily: 'Arial', 
    },
    input: {
        width: "80%",
        height: 40,
        borderColor: '#000', 
        borderWidth: 2.5,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 20,
       // backgroundColor: "#309b7b", 
        fontSize: 16,
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
      
  }
  });