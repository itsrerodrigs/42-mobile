import { ClerkProvider } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY } from '@env';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <ClerkProvider publishableKey={EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ClerkProvider>
  )
}