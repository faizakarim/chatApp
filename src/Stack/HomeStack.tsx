import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatScreen} from '../screens/ChatScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {MessagesScreen} from '../screens/MessagesScreen';

export const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      // initialRouteName="LoginScreen"
      screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
      <Stack.Screen name="Home" component={MessagesScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};
