import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IProps {}

export const ChatScreen: React.FC<IProps> = () => {
  return (
    <View style={{flex: 1}}>
      <View>
        <Text>Hello </Text>
      </View>

      <View style={styles.inputView}>
        <TouchableOpacity>
          <Ionicons name={'add-circle'} color={'#3ddf95'} size={30} />
        </TouchableOpacity>
        <TextInput style={{flex: 1}} />
        <TouchableOpacity>
          <Ionicons name={'md-send'} color={'#3ddf95'} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderRadius: 5,
    margin: 5,
    padding: 2,
  },
});
