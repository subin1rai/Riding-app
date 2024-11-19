import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'
const Home = () => {
    const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href={'/(root)/(tabs)/home'} />
  }

     return <Redirect href="/(auth)/Welcome" />;
}

export default Home; 