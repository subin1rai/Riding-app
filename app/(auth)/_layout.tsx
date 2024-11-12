import { Slot, Stack } from "expo-router";
import "../../global.css";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="Welcome" options={{ headerShown: false }} />
      <Stack.Screen name="Sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="Sign-in" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
