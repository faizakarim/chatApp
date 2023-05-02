import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeStack} from './HomeStack';
import {ProfileStack} from './ProfileStack';

const Tab = createBottomTabNavigator();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({route}) => ({
          headerStyle: {backgroundColor: '#3ddf95'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
          tabBarActiveTintColor: '#3ddf95',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'HomeStack') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'SettingsStack') {
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            title: 'Home',
          }}
        />
        <Tab.Screen
          name="SettingsStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            title: 'Profile',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
