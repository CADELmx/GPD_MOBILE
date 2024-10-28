import { useThemeColor } from "@/hooks/useThemeColor";
import { Stack } from "expo-router";

export default function RootLayout(){
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  return(
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor,
      },
      headerTintColor: textColor,
    }}>
      <Stack.Screen name="home"/>
      <Stack.Screen name="area"/>
      <Stack.Screen name="comments"/>
      <Stack.Screen name="educationalPrograms"/>
      <Stack.Screen name="subject"/>
      <Stack.Screen name="teachingStaff"/>
      <Stack.Screen name="users"/>
    </Stack>
  )
}