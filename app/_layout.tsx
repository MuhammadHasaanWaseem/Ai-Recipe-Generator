import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { StatusBar } from "react-native";
import { LogtoProvider, LogtoConfig, UserScope } from '@logto/rn';
import React from "react";

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
  scopes:[
    UserScope.Email
  ]
};
  return(
    <LogtoProvider config={config}>
      <Stack>
  <Stack.Screen name="Landing" options={{headerShown:false,animation:'slide_from_left'}}/>
</Stack>
</LogtoProvider>

  )
}
