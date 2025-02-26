import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect } from 'expo-router';
import "../global.css";
import { useAuth } from '@clerk/clerk-expo'


 


export default function HomeScreen() {
  const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href={'/(root)/(tabs)/home'} />
  }
  return (
    <Redirect href="/(auth)/welcome" />

  );
}
