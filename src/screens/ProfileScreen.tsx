import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {ProfileCard} from '../components/ProfileCard';

interface IProps {}

export const ProfileScreen: React.FC<IProps> = () => {
  const Data = [
    {
      name: 'Account',
      Icon: 'lock-closed',
    },
    {
      name: 'Privacy',
      Icon: 'key',
    },
    {
      name: 'Notifications',
      Icon: 'notifications-sharp',
    },
    {
      name: 'Help',
      Icon: 'information',
    },
    {
      name: 'Setting',
      Icon: 'settings',
    },
    {
      name: 'Log Out',
      Icon: 'exit',
    },
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: 10,
        }}>
        <Image
          source={require('../../assets/images/person1.png')}
          style={{
            borderRadius: 10,
            height: '40%',
            width: 150,
            marginVertical: 10,
          }}
          resizeMode="contain"
        />
        <Text style={{color: 'black', fontWeight: '900', fontSize: 20}}>
          Faiza Karim
        </Text>
        <Text style={{color: 'black'}}>Bio</Text>
      </View>

      {Data.map(item => {
        return <ProfileCard iconName={item.Icon} item={item.name} />;
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
