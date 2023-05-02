import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

interface IProps {}

export const LoginScreen: React.FC<IProps> = () => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/chat.png')}
        resizeMode="cover"
        style={styles.image}
        blurRadius={5}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 10,
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#eceeef',
    color: 'black',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#3ddf95',
    padding: 15,
    margin: 12,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '900',
    color: 'white',
  },
});
