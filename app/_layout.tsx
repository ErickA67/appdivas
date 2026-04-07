import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#C2185B' },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="index" options={{ title: "Diva's" }} />
      <Stack.Screen name="skincare" options={{ title: "Skin Care" }} />
      <Stack.Screen name="cabelo" options={{ title: "Cabelos" }} />
      <Stack.Screen name="maquiagem" options={{ title: "Maquiagem" }} />
      <Stack.Screen name="promocoes" options={{ title: "Promoções" }} />
    </Stack>
  );
}
