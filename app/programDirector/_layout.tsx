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
      <Stack.Screen name="createPartial"/>
      <Stack.Screen name="approvedTemplate"/>
      <Stack.Screen name="correctedTemplate"/>
      <Stack.Screen name="pendingTemplate"/>
      <Stack.Screen name="teachingStaff"/>

    </Stack>
  )
}