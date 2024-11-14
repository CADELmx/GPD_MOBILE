import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { PaperProvider } from 'react-native-paper';
import { useThemeColor } from '@/hooks/useThemeColor';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <PaperProvider theme={{ dark: true }}>
      <Stack screenOptions={{
        headerShown: false,
      }} >
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="index" />
        <Stack.Screen name="auth/login" />
        <Stack.Screen name="academicSecretary/home" />
        <Stack.Screen name="academicSecretary/areas/create" />
        <Stack.Screen name="academicSecretary/areas/delete" />
        <Stack.Screen name="academicSecretary/areas/home" />
        <Stack.Screen name="academicSecretary/areas/update" />
        <Stack.Screen name="academicSecretary/commentsTemplates/create" />
        <Stack.Screen name="academicSecretary/commentsTemplates/delete" />
        <Stack.Screen name="academicSecretary/commentsTemplates/home" />
        <Stack.Screen name="academicSecretary/commentsTemplates/update" />
        <Stack.Screen name="academicSecretary/docentTemplates/create" />
        <Stack.Screen name="academicSecretary/docentTemplates/delete" />
        <Stack.Screen name="academicSecretary/docentTemplates/home" />
        <Stack.Screen name="academicSecretary/docentTemplates/update" />
        <Stack.Screen name="academicSecretary/educationalPrograms/create" />
        <Stack.Screen name="academicSecretary/educationalPrograms/delete" />
        <Stack.Screen name="academicSecretary/educationalPrograms/home" />
        <Stack.Screen name="academicSecretary/educationalPrograms/update" />
        <Stack.Screen name="academicSecretary/subjects/create" />
        <Stack.Screen name="academicSecretary/subjects/delete" />
        <Stack.Screen name="academicSecretary/subjects/home" />
        <Stack.Screen name="academicSecretary/subjects/update" />
        <Stack.Screen name="academicSecretary/users/home" />
        <Stack.Screen name="programDirector/home" />
        <Stack.Screen name="programDirector/areas/create" />
        <Stack.Screen name="programDirector/areas/delete" />
        <Stack.Screen name="programDirector/areas/home" />
        <Stack.Screen name="programDirector/areas/update" />
        <Stack.Screen name="programDirector/commentsTemplates/create" />
        <Stack.Screen name="programDirector/commentsTemplates/delete" />
        <Stack.Screen name="programDirector/commentsTemplates/home" />
        <Stack.Screen name="programDirector/commentsTemplates/update" />
        <Stack.Screen name="programDirector/docentTemplates/create" />
        <Stack.Screen name="programDirector/docentTemplates/delete" />
        <Stack.Screen name="programDirector/docentTemplates/home" />
        <Stack.Screen name="programDirector/docentTemplates/update" />
        <Stack.Screen name="programDirector/educationalPrograms/create" />
        <Stack.Screen name="programDirector/educationalPrograms/delete" />
        <Stack.Screen name="programDirector/educationalPrograms/home" />
        <Stack.Screen name="programDirector/educationalPrograms/update" />
        <Stack.Screen name="programDirector/partialTemplates/create" />
        <Stack.Screen name="programDirector/partialTemplates/delete" />
        <Stack.Screen name="programDirector/partialTemplates/home" />
        <Stack.Screen name="programDirector/partialTemplates/status" />
        <Stack.Screen name="programDirector/partialTemplates/update" />
        <Stack.Screen name="programDirector/subjects/create" />
        <Stack.Screen name="programDirector/subjects/delete" />
        <Stack.Screen name="programDirector/subjects/home" />
        <Stack.Screen name="programDirector/subjects/update" />
      </Stack>
    </PaperProvider>
  );
}
