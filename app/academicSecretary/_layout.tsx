import { Stack } from "expo-router";

export default function RootLayout(){
  return(
    <Stack>
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