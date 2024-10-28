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
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  return (
    <PaperProvider theme={{ dark: true }}>
      <Stack screenOptions={{
        headerStyle: {
          backgroundColor,
        },
        headerTintColor: textColor,
      }}>
        <Stack.Screen name='auth' options={{ headerShown: true }} />
        <Stack.Screen name='programDirector' />
        <Stack.Screen name="auth/login" />
        <Stack.Screen name="academicSecretary" />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="home" />
        <Stack.Screen name="academicSecretary/areas/home" />
        <Stack.Screen name="academicSecretary/comments" />
        <Stack.Screen name="academicSecretary/eduProg/home" />
        <Stack.Screen name="academicSecretary/subject" />
        <Stack.Screen name="academicSecretary/teachingStaff" />
        <Stack.Screen name="academicSecretary/users" />
        <Stack.Screen name="programDirector/home" />
        <Stack.Screen name="programDirector/createPartial" />
        <Stack.Screen name="programDirector/approvedTemplate" />
        <Stack.Screen name="programDirector/correctedTemplate" />
        <Stack.Screen name="programDirector/pendingTemplate" />
        <Stack.Screen name="programDirector/teachingStaff" />
      </Stack>
    </PaperProvider>
  );
}
