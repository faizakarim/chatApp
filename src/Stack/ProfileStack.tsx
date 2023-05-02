import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from '../screens/ProfileScreen';

export const ProfileStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={ProfileScreen} />
      {/* <Stack.Screen
            name="Details"
            component={DetailsScreen} /> */}
    </Stack.Navigator>
  );
};
