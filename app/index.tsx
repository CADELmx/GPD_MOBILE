import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function IndexApp(){
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded){
      router.replace("/auth/login");
    }
  }, [loaded]);

  useEffect(() => {
    setLoaded(true);
  }, [loaded]);

  return(
    <View>
      <Text>Gestion Plantilla Docente</Text>
    </View>
  )
}