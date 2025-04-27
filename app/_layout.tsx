import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { StatusBar } from "react-native";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-extrabold': require('./../assets/fonts/Outfit-ExtraBold.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'outfit-semibold': require('./../assets/fonts/Outfit-SemiBold.ttf'),



  });
  return(
<Stack>
  <Stack.Screen name="Landing" options={{headerShown:false,animation:'slide_from_left'}}/>
</Stack>

  )
}
