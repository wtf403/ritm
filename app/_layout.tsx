import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { AppProvider } from '@/contexts/AppContext';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <AppProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="onboarding/welcome" options={{ headerShown: false }} />
          <Stack.Screen name="onboarding/focus-skill" options={{ headerShown: false }} />
          <Stack.Screen name="onboarding/nfc-token" options={{ headerShown: false }} />
          <Stack.Screen name="onboarding/chain" options={{ headerShown: false }} />
          <Stack.Screen name="onboarding/token-binding" options={{ headerShown: false }} />
          <Stack.Screen name="onboarding/goal-setting" options={{ headerShown: false }} />
          <Stack.Screen name="onboarding/ready" options={{ headerShown: false }} />
          <Stack.Screen name="dashboard" options={{ headerShown: false }} />
          <Stack.Screen name="timer" options={{ headerShown: false }} />
          <Stack.Screen name="pause" options={{ headerShown: false }} />
          <Stack.Screen name="rhythm-loss" options={{ headerShown: false }} />
          <Stack.Screen name="settings" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </AppProvider>
  );
}
