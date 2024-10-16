import { Stack } from "expo-router";

export default function RootLayout(){
  return(
    <Stack>
      <Stack.Screen name="home"/>
      <Stack.Screen name="createPartial"/>
      <Stack.Screen name="approvedTemplate"/>
      <Stack.Screen name="correctedTemplate"/>
      <Stack.Screen name="pendingTemplate"/>
      <Stack.Screen name="teachingStaff"/>

    </Stack>
  )
}