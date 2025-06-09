import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { StatusBar } from "react-native";
import { LogtoProvider, LogtoConfig, UserScope } from '@logto/rn';
import React from "react";
import { UserContext } from "@/context/UserContext";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-extrabold': require('./../assets/fonts/Outfit-ExtraBold.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'outfit-semibold': require('./../assets/fonts/Outfit-SemiBold.ttf'),
  });
  const config: LogtoConfig = {
    endpoint: 'https://4wwx72.logto.app/',
    appId: '5axo6ekk67t5rgt5ydtvd',
    scopes: [
      UserScope.Email
    ]
  };
  const [user, setUser] = React.useState(null);
  return (
    <LogtoProvider config={config}>
      <UserContext.Provider value={{ user, setUser }}>
        <Stack>
          <Stack.Screen name="Landing" options={{ headerShown: false, animation: 'slide_from_left' }} />
          <Stack.Screen name="index" options={{ headerShown: false, animation: 'slide_from_left' }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false, animation: 'slide_from_left' }} />
        </Stack>
      </UserContext.Provider>
    </LogtoProvider>

  )
}
